<template>
  <div class="f-row col-center filter-header">
    <el-date-picker
      v-model="dateFilter"
      :shortcuts="shortcuts"
      type="daterange"
      value-format="YYYY-MM-DD"
      placeholder="Please pick a date"
    />
    <span class="mgl-5 mgr-5"> before 11.30 am</span>
    <el-select
      v-model="typeArr"
      placeholder="Task Type"
      multiple
      clearable
      @visible-change="onTypeArrChange"
    >
      <el-option
        v-for="(type, key) in dailyPendingTaskTypeEnum"
        :key="key"
        :label="type"
        :value="key"
      />
    </el-select>
    <el-select
      v-model="listQuery.transportMode"
      placeholder="Transport"
      style="width: 120px"
      clearable
      @change="handleFilter"
    >
      <el-option
        v-for="(transport, key) in transportEnum"
        :key="key"
        :label="transport"
        :value="key"
      />
    </el-select>
    <el-select
      v-if="listQuery.transportMode"
      v-model="listQuery.carrier"
      placeholder="Carrier"
      style="width: 120px"
      clearable
      @change="handleFilter"
    >
      <el-option
        v-for="(carrier, key) in addNullOptionInEnumObject(transportCarrierEnum[listQuery.transportMode])"
        :key="key"
        :label="carrier"
        :value="key"
      />
    </el-select>
    <el-input
      v-model="listQuery.search"
      style="width: 200px;"
      placeholder="Search: (order info)"
      clearable
      @change="fetchList"
    >
      <template #append>
        <el-button
          class="mgl-5"
          type="primary"
          :icon="Search"
          @click="fetchList"
        />
      </template>
    </el-input>

    <el-input
      v-model="scannedTrackingNumber"
      class="scan-label"
      style="width: 300px;"
      placeholder="Scan shipping label to find task"
      @input="(() => debounce(findTaskByTrackingNumber, 200))()"
    >
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { Search, CircleClose } from '@element-plus/icons-vue';
import { transportEnum, transportCarrierEnum, dailyPendingTaskTypeEnum  } from '@/enums/logistic';
import { parseTime, debounce, addNullOptionInEnumObject } from '@/utils';
const emit = defineEmits(['fetchList']);

const listQuery = inject('listQuery') as any;
const typeArr = inject('typeArr');

const scannedTrackingNumber = ref('');

const shortcuts = [
  {
    text: 'Today',
    value: () => [new Date().getTime() - 86400 * 1000, new Date()],
  },
  {
    text: 'Tomorrow',
    value: () => [new Date(), new Date().getTime() + 86400 * 1000],
  },
];

const fetchList = () => emit('fetchList');

const findTaskByTrackingNumber = () => {
  if (scannedTrackingNumber.value.endsWith(';')) {
    const searchCopy = listQuery.value.search;
    listQuery.value.search = scannedTrackingNumber.value.slice(0, -1);
    scannedTrackingNumber.value = '';
    fetchList();
  }
};

const handleFilter = () => {
  listQuery.value.page = 1;
  fetchList();
};

const onTypeArrChange = (visible: boolean) => {
  if (!visible)
    fetchList();
};

const dateFilter = ref(null);
watchEffect(() => {
  if (dateFilter.value) {
    listQuery.value.start = dateFilter.value[0] + 'T11:30:00';
    listQuery.value.end = dateFilter.value[1] + 'T11:30:00';
    fetchList();
  }
});

function initDateFilter () {
  const dayWindow = 1;
  dateFilter.value = [
    parseTime(new Date().getTime() - 86400000 * dayWindow, '{y}-{m}-{d}'),
    parseTime(new Date(), '{y}-{m}-{d}')
  ];
}

onMounted(() => {
  initDateFilter();
});
</script>

<style lang="sass" scoped>
.scan-label
  margin-left: 10px
</style>
