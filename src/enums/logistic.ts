export const freightStatusEnum = {
  IN_TRANSIT: 'In Transit',
  DELIVERED: 'Delivered',
  CANCELLED: 'Canceled',
  PICKED_UP: 'Picked Up'
};
export const forwarderEnum = {
  FPL: 'Full Power Logistics',
  FLEXPORT: 'FLEXPORT',
  LIGHTNING: 'LIGHTNING',
  AGL: 'AGL',
  SF: 'SF'
};
export const modeEnum = {
  OCEAN: 'Ocean',
  AIR: 'Air',
  TRUCK: 'Truck'
};
export const containerEnum = {
  GP20: '20GP',
  GP40: '40GP',
  HQ40: '40HQ',
  HQ45: '45HQ',
  LCL: 'LCL'
};
export const oriPortEnum = {
  CALGARY: 'Calgary',
  CALIFORNIA: 'California',
  FUZHOU: 'Fuzhou',
  HAMBURG: 'Hamburg',
  XIAMEN: 'Xiamen',
  YANTIAN: 'Yantian'
};
export const destPortEnum = {
  CALGARY: 'Calgary',
  FELIXTOWE: 'Felixtowe',
  FUZHOU: 'Fuzhou',
  HAMBURG: 'Hamburg',
  LA_LB: 'LA/LB',
  MELBOURNE: 'Melbourne'
};
export const packageStatusEnum = {
  DELIVERING: 'Delivering',
  DELIVERED_BUT_UNCHECKED: 'Delivered but unchecked',
  COMPLETE_WITH_DELIVERED: 'Complete with delivered',
  COMPLETE_WITH_RETURNED: 'Complete with returned',
  RETURNING: 'Returning',
  RETURNED_BUT_UNCHECKED: 'Returned but unchecked',
  LOST: 'Lost'
};
export const taskStatusEnum = {
  UNFULFILLED: 'Unfulfilled',
  FULFILLED_AND_DELIVERING: 'Fulfilled and delivering',
  FAILED: 'Failed',
  COMPLETE: 'Complete',
  ONHOLD: 'Onhold',
  CANCELLED: 'Cancelled'
};
export const taskTypeEnum = {
  FULFILLMENT: 'Fulfillment',
  REPLACE: 'Replace',
  RETURN: 'Return',
  RETURN_TO_REPAIR: 'Return to Repair',
};
export const inventoryTaskTypeEnum = {
  MOVE: 'Move'
};
export const taskReasonEnum = {
  ITEM_UPGRADE: 'Unit Upgrade',
  ITEM_DEGRADE: 'Unit Degrade',
  ITEM_DEMAGED: 'Unit Damaged',
  HARDWARE_DEFECT: 'Hardware Defect',
  PACKAGE_LOST: 'Package Lost'
};
export const unitConditionEnum = {
  GOOD: 'Good',
  FIXED_A: 'Fixed Class A',
  FIXED_B: 'Fixed Class B',
  FIXED_C: 'Fixed Class C',
  SCRAP: 'Scrap',
  DAMAGED: 'Damaged',
};
export const packageConditionEnum = {
  GOOD: 'Good',
  MISSING: 'Missing',
  DAMAGED: 'Damaged',
};
// export const reversedConditionEnum = {
//   'Good': 'GOOD',
//   'Fixed Class A': 'FIXED_A',
//   'Fixed Class B': 'FIXED_B',
//   'Fixed Class C': 'FIXED_C',
//   'Scrap': 'SCRAP',
//   'Damaged': 'DAMAGED',
// };
export const carrierEnum = {
  TRUCK: 'Truck',
  RRTS: 'RRTS-Truck',
  DAYLIGHT: 'Daylight-Truck',
  PILOT: 'PILOT-Truck',
  SAIA: 'SAIA-Truck',
  RL: 'R&L-Truck',
  UPS: 'UPS',
  USPS: 'USPS',
  FEDEX: 'FedEx',
};
export const codeNameEnum = {
  '55V1B': '55 V1 Board',
  '55V1WS': '55 V1 White Stand',
  '55V1RS': '55 V1 Red Stand',
  '55V1ESt': '55 V1 Extra Stylus',
  '55V1ASt': '55 V1 Active Stylus',
  '55V1UB': '55 V1 Unboxed Board',
  '55V1PC': '55 V1 Power Cord',
  '55BP': '55 Board Pallet',
  '55SP': '55 Stand Pallet',
  'EPP1_249': 'Extend Protection Plan 1 year',
  'EPP1_350': 'Extend Protection Plan 1 year',
  'EPP2_499': 'Extend Protection Plan 2 year',
  'EPP2_625': 'Extend Protection Plan 2 year',
  'EPP3_699': 'Extend Protection Plan 3 year',
  'EPP3_850': 'Extend Protection Plan 3 year',
  '75ProB': '75 Board',
  '75ProUB': '75 Unboxed Board',
  '75ProS': '75 Stand',
  '75ProESt': '75 Extra Stylus',
  '75ProASt': '75 Active Stylus',
  '75ProUS': '75 Unboxed Stand',
  '75ProOPS': '75 OPS',
  '75ProPC': '75 Power Cord',
  '75ProRm': '75 Remote',
  '75ProSHB': '75 Stand Hanging Bar',
  '75ProBP': '75 Board Pallet',
  '75ProSP': '75 Stand Pallet',
  '55S1RS': '55 S1 Red Stand',
  '55S1GS': '55 S1 Green Stand',
  '55S1WS': '55 S1 White Stand',
  '55S1BS': '55 S1 Blue Stand',
  '55S1B': '55 S1 Board',
  'CAM01A': 'C1 Camera',
  '55P1B': '55 P1 Board',
  '55V1BPB': '55 V1 Package Box',
  '55S1BPB': '55 S1 Package Box',
  '75ProBPB': '75 Pro Package Box'
};
export const codeIconEnum = {
  '55V1B': 'product-board',
  '55V1WS': 'product-stand',
  '55V1RS': 'product-stand',
  '55V1ESt': 'product-stylus',
  '55V1ASt': 'product-stylus',
  '55V1UB': 'product-board',
  '55V1PC': '55 V1 Power Cord',
  '55BP': '55 Board Pallet',
  '55SP': '55 Stand Pallet',
  '75ProB': 'product-board',
  '75ProUB': 'product-board',
  '75ProS': 'product-stand',
  '75ProESt': 'product-stylus',
  '75ProASt': 'product-stylus',
  '75ProUS': 'product-stand',
  '75ProOPS': 'product-ops-75',
  '75ProPC': '75 Power Cord',
  '75ProRm': '75 Remote',
  '75ProSHB': '75 Stand Hanging Bar',
  '75ProBP': '75 Board Pallet',
  '75ProSP': '75 Stand Pallet',
  '55S1B': 'product-board',
  '55P1B': 'product-board',
  '55V1BPB': '55 V1 Package Box',
  '55S1BPB': '55 S1 Package Box',
  '75ProBPB': '75 Pro Package Box'
};

export const skuCodeEnum = {
  'V55N201W/WOS': '55V1B',
  'V55N203W': '55V1B',
  'V55N205W': '55V1B',
  'V55N201EU': '55V1B',
  'V55N203EU': '55V1B',
  'V55N205EU': '55V1B',
  'V55N205AU': '55V1B',
  '55WSTAND101': '55V1WS',
  '55WSTAND201': '55V1WS',
  '55WSTAND301': '55V1WS',
  '55RSTAND101': '55V1RS',
  '55RSTAND201': '55V1RS',
  '55RSTAND301': '55V1RS',
  'VTS001': '55V1ESt',
  'VTS002': '55V1ASt',
  'V55N203WR': '55V1UB',
  'V55N205WR': '55V1UB',
  'V55N203EUR': '55V1UB',
  'V55N205EUR': '55V1UB',
  'V55N205AUR': '55V1UB',
  'V55NWPC': '55V1PC',
  'V55NEUPC': '55V1PC',
  'V55NEWPC': '55V1PC',
  'V55PL': '55BP',
  '55STAND101PL': '55SP',
  '55STAND201PL': '55SP',
  '55STAND301PL': '55SP',
  'N75H301US': '75ProB',
  'N75H301USR': '75ProUB',
  'ST02H': '75ProS',
  'VTS003': '75ProESt',
  'VTS004': '75ProASt',
  'ST02HR': '75ProUS',
  'WB5W810W': '75ProOPS',
  'N75HUSPC': '75ProPC',
  'N75HUKPC': '75ProPC',
  'N75HDEPC': '75ProPC',
  'N75HUSRM': '75ProRm',
  'N75HUKRM': '75ProRm',
  'N75HDERM': '75ProRm',
  'ST02HHB': '75ProSHB',
  'N75HPL': '75ProBP',
  'ST02HPL': '75ProSP',
  '55ST01R': '55S1RS',
  '55ST01G': '55S1GS',
  '55ST01W': '55S1WS',
  '55ST01B': '55S1BS',
  'S55T01AUS': '55S1B',
  'CAM01A': 'CAM01A',
  'P55H301US': '55P1B'
};
export const codeSkuArrEnum = {
  '55V1B': [
    'V55N205AU',
    'V55N205EU',
    'V55N203EU',
    'V55N201EU',
    'V55N205W',
    'V55N203W',
    'V55N201W/WOS'
  ],
  '55V1WS': [
    '55WSTAND301',
    '55WSTAND201',
    '55WSTAND101'
  ],
  '55V1RS': [
    '55RSTAND301',
    '55RSTAND201',
    '55RSTAND101'
  ],
  '55V1ESt': [
    'VTS001'
  ],
  '55V1ASt': [
    'VTS002'
  ],
  '55V1UB': [
    'V55N205AUR',
    'V55N205EUR',
    'V55N203EUR',
    'V55N205WR',
    'V55N203WR'
  ],
  '55V1PC': [
    'V55NEWPC',
    'V55NEUPC',
    'V55NWPC'
  ],
  '55BP': [
    'V55PL'
  ],
  '55SP': [
    '55STAND301PL',
    '55STAND201PL',
    '55STAND101PL'
  ],
  '75ProB': [
    'N75H301US'
  ],
  '75ProUB': [
    'N75H301USR'
  ],
  '75ProS': [
    'ST02H'
  ],
  '75ProESt': [
    'VTS003'
  ],
  '75ProASt': [
    'VTS004'
  ],
  '75ProUS': [
    'ST02HR'
  ],
  '75ProOPS': [
    'WB5W810W'
  ],
  '75ProPC': [
    'N75HDEPC',
    'N75HUKPC',
    'N75HUSPC'
  ],
  '75ProRm': [
    'N75HDERM',
    'N75HUKRM',
    'N75HUSRM'
  ],
  '75ProSHB': [
    'ST02HHB'
  ],
  '75ProBP': [
    'N75HPL'
  ],
  '75ProSP': [
    'ST02HPL'
  ],
  '55S1RS': [
    '55ST01R'
  ],
  '55S1GS': [
    '55ST01G'
  ],
  '55S1WS': [
    '55ST01W'
  ],
  '55S1BS': [
    '55ST01B'
  ],
  '55S1B': [
    'S55T01AUS'
  ],
  'CAM01A': [
    'CAM01A'
  ],
  '55P1B': [
    'P55H301US'
  ]
};
// API 获取失败的情况下，调用默认写死的warehouseEnum
export const fixedWarehouseEnum = {
  1: 'FBA-US',
  2: 'FBA-CA',
  3: 'FBA-DE',
  4: 'FBA-UK',
  5: 'FBA-JP',
  6: 'IWIN',
  7: 'RED STAG',
  8: 'VIBE BEL',
  9: 'FPL-CA',
  10: 'FPL-AU',
  11: 'TOYOND',
  12: 'TCL',
  13: 'SF (Fuqing)',
  14: 'Jiguang',
  15: 'HH',
  16: 'Zhongao',
  17: 'TPV',
  18: 'Customer'
};