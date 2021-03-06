<template>
  <el-descriptions
    :column="3"
    direction="vertical"
    border
  >
    <el-descriptions-item label="Order ID">
      {{ orderEnum[task.orderId]?.id }}
      <template
        v-for="order in orderEnum[task.orderId]?.rawOrders"
        :key="order.id"
      >
        <el-tag size="small">
          {{ order?.id }}
        </el-tag>
      </template>
    </el-descriptions-item>
    <el-descriptions-item label="Task ID">
      {{ task.id }}
    </el-descriptions-item>
    <el-descriptions-item label="TaskType">
      {{ task.taskType }}
    </el-descriptions-item>
    <el-descriptions-item
      width="30%"
      label="Create Date"
    >
      {{ formatVBDate(task.createdAt) }}
    </el-descriptions-item>
    <el-descriptions-item
      width="30%"
      label="Fulfilled Date"
    >
      <span v-if="task.fulfilledAt">
        {{ formatVBDate(task.fulfilledAt) }}
      </span>
      <span v-else></span>
    </el-descriptions-item>
    <el-descriptions-item
      label="Status & Action"
      width="40%"
    >
      <el-tooltip
        v-if="tasksProductFulQty[task.id].error"
        effect="light"
      >
        <el-button
          type="danger"
          size="default"
        >
          Incomplete
        </el-button>
        <template #content>
          <el-tag
            size="large"
            type="danger"
            style="font-size: 14px"
          >
            {{ tasksProductFulQty[task.id].error }}
          </el-tag>
        </template>
      </el-tooltip>
      <el-button
        v-if="!tasksProductFulQty[task.id].error"
        type="primary"
      >
        Complete
      </el-button>
      <el-button
        :type="task.fulfilledAt ? 'warning' : 'success'"
        :disabled="!!tasksProductFulQty[task.id].error"
        @click="updateTaskFulfillTime"
      >
        {{ isFulfilled ? 'Fulfilled' : 'Fulfill' }}
      </el-button>
      <el-button
        type="success"
        :disabled="!isFulfilled"
        @click="sendEmailAPI(task.id)"
      >
        Send Email
      </el-button>
    </el-descriptions-item>
    <el-descriptions-item label="Transport & Carrier">
      {{ transportEnum[task.transportMode] }}
      <el-select
        v-if="task.transportMode"
        v-model="taskCarrier"
        placeholder="Please select"
        clearable
        @change="onCarrierChange(task)"
      >
        <el-option
          v-for="(item, key) in transportCarrierEnum[task.transportMode]"
          :key="item"
          :label="item"
          :value="key"
        />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item label="Shipment Info">
      <OrderShipmentInfo :order-item="orderEnum[task.orderId] || {}" />
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          Note
          <el-button
            :type="isEditTaskNote ? 'success' : 'primary'"
            @click="editTaskNote"
          >
            {{ isEditTaskNote ? 'save' : 'edit' }}
          </el-button>
        </div>
      </template>
      <el-input
        v-model="taskNote"
        type="textarea"
        :disabled="!isEditTaskNote"
      ></el-input>
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import OrderShipmentInfo from '../../../components/OrderShipmentInfo.vue';
import { transportEnum, transportCarrierEnum } from '@/enums/logistic';
import { updateTaskAPI, sendEmailAPI } from '@/api';
import { formatVBDate } from '@/utils/logistic';

const props = defineProps({
  task: {
    type: Object,
    required: true
  },
  orderEnum: {
    type: Object,
    default: () => {}
  }
});

const isFulfilled = ref(false);
const isEditTaskNote = ref(false);
const tasksProductFulQty = inject('tasksProductFulQty');
const taskNote = ref(props.task.note);

const emit = defineEmits(['fetchList']);
const taskCarrier = ref(props.task.carrier);

const onCarrierChange = (task) => {
  task.carrier = taskCarrier.value;
  ElMessageBox.confirm('Update it?', 'Warning', {
    type: 'warning',
    callback: (action) => {
      if (action === 'confirm')
        updateTaskAPI(task.id, task).then(() => emit('fetchList'));
      else
        ElMessage.info('Update Canceled.');
    },
  });
};

const updateTaskFulfillTime = () => {
  const task = Object.assign({}, props.task);
  task.fulfilledAt = new Date();
  updateTaskAPI(task.id, task).then(() => {
    isFulfilled.value = true;
  });
};

const editTaskNote = () => {
  if (isEditTaskNote.value) {
    const task = Object.assign({}, props.task, { note: taskNote.value });
    updateTaskAPI(task.id, task).then(() => {
      isEditTaskNote.value = false;
      emit('fetchList');
    });
  } else {
    isEditTaskNote.value = true;
  }
};
</script>

<style lang="sass" scoped>
.cell-item
  display: flex
  justify-content: space-between
  align-items: center
</style>
