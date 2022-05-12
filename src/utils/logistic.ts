// 合并products array为一个{productCode: totalQuantity}的对象
const combineSameProductQuantity = (arr => {
  const result = {};
  arr.forEach(item => {
    const code = item.productCode;
    result[code] = (result[code] + item.quantity) || item.quantity;
  });
  return result;
});

export const formatAssignedOrderItem = async orderItem => {
  const raws = orderItem.rawOrders;
  const originId = orderItem.id;
  const createdAt = orderItem.createdAt;
  let productsArr = [];
  raws.forEach(order => {
    productsArr = productsArr.concat(order.items); // products array [{product_code: 'ABC', quantity: 1}]
  });
  orderItem = Object.assign(orderItem, raws[0]);
  orderItem.id = originId;
  orderItem.createdAt = createdAt;
  orderItem.items = productsArr;
  orderItem.products = combineSameProductQuantity(productsArr); // {productCode: totalQuantity}

  return orderItem;
};

export const formatVBDate = (date: string) => date.replace('T', ' ').replace(/\.\d+/, '').replace(/\+.*/, '');

export const getTaskOrderIdArr = (taskList: any) :Array<number> => {
  const temp = [];
  taskList.forEach(task => temp.push(task.orderId));
  return temp;
};
