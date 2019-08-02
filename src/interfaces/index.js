import Fetch from './fetch'


export default {
    async fetch() {
        let fetch = new Fetch()
        return fetch.fetch(...arguments)
    },
    // 呼叫中心登录
    async loginCenter(params) {
        let actiontype = 'AccountService_InnerUserLogin'
        return await this.fetch(actiontype, params)
    },
    // 机票预订业务
    // 查询航班
    async searchFlight(params) {
        let actiontype = 'FlightService_FlightSearchHandler'
        return await this.fetch(actiontype, params)
    },
    // 底价日历查询
    async fightLowPrice(params) {
        let actiontype = 'FlightService_LowPriceHandler'
        return await this.fetch(actiontype, params)
    },
    // 获取所有城市列表
    async airportList(params) {
        let actiontype = 'FlightService_AirportHandler'
        return await this.fetch(actiontype, params)
    },
    // 提交订单接口
    async submitFilghtOrder(params) {
        let actiontype = 'Manage_CreateOrderHandler'
        return await this.fetch(actiontype, params)
    },
    // 订单详情
    async getOrderDetail(params) {
        let actiontype = 'Manage_OrderDetailHandler'
        return await this.fetch(actiontype, params)
    },
    // 订单列表
    async getOrderList(params) {
        let actiontype = 'Manage_OrderListHandler'
        return await this.fetch(actiontype, params)
    },
    // 退票
    async refundTickets(params) {
        let actiontype = 'Manage_RefundOrderHandler'
        return await this.fetch(actiontype, params)
    },
    // 重发短信
    async repeatMessages(params) {
        let actiontype = 'Manage_SendCreateSuccessMessage'
        return await this.fetch(actiontype, params)
    },
    // 取消订单
    async cancelOrder(params) {
        let actiontype = 'OrderService_OrderCancelHandler'
        return await this.fetch(actiontype, params)
    },
    // 获取订单操作记录
    async getOrderOperate(params) {
        let actiontype = 'Manage_GetOperationDetail'
        return await this.fetch(actiontype, params)
    },
    // 保险业务
    // 根据证件号获取购票记录
    async getTicketRecordById(params) {
        let actiontype = 'Manage_GetTicketInfosByFoid'
        return await this.fetch(actiontype, params)
    },
    // 根据票号获取购票记录
    async getTicketRecordByTkNo(params) {
        let actiontype = 'Manage_GetTicketInfoByTkNo'
        return await this.fetch(actiontype, params)
    },
    // 获取可买保险
    async getCanBuyInsurance(params) {
        let actiontype = 'Manage_GetInsuranceProviders'
        return await this.fetch(actiontype, params)
    },
    // 创建保险订单
    async createdInsuranceOrder(params) {
        let actiontype = 'Manage_CreateInsuranceOrder'
        return await this.fetch(actiontype, params)
    },
    // 保险详情
    async getInsuranceDetail(params) {
        let actiontype = 'Manage_GetInsuranceOrderDetail'
        return await this.fetch(actiontype, params)
    },
    // 修改投保状态
    async changeInsuranceStatus(params) {
        let actiontype = 'Manage_ChangeInsureStatus'
        return await this.fetch(actiontype, params)
    },
    // 获取保险订单列表
    async getInsuranceList(params) {
        let actiontype = 'Manage_GetInsuranceOrderList'
        return await this.fetch(actiontype, params)
    },
    // 保险操作记录
    async getInsuranceOperate(params) {
        let actiontype = 'Manage_GetOrderOperationLogs'
        return await this.fetch(actiontype, params)
    },
    // 保险短信
    async sendInsuranceMessage(params) {
        let actiontype = 'Manage_SendInsuranceCreateSuccessMessage'
        return await this.fetch(actiontype, params)
    },
    async refundInsurance(params) {
        let actiontype = 'Manage_RefundInsurance'
        return await this.fetch(actiontype, params)
    },
    /**补订婴儿票相关接口*/
    //查询票号
    async queryOrderInfoForBabyTicket(params) {
        let actiontype = 'FlightService_AdultDetrTNHandler'
        return await this.fetch(actiontype, params)
    },
    // 行李
    // 行李列表
    async getLuggageList(params) {
    	let actiontype = 'PrepaidLuggage_GetManageOrderList'
    	return await this.fetch(actiontype, params)
    },
    // 行李退款
    async refundLuggageOrder(params) {
    	let actiontype = 'PrepaidLuggage_OrderRefund_CreateManageSingleRefundOrder'
    	return await this.fetch(actiontype, params)
    },
    // 改期接口
    // 校验是否可以改期
    async checkIsCanChangeDate(params) {
        let actiontype = 'Manage_CheckIsCanChangeHandler'
        return await this.fetch(actiontype, params)
    },
    // 改期航班查询
    async changeFlightDateSearch(params) {
        let actiontype = 'OrderService_GetChangeFlightsHandler'
        return await this.fetch(actiontype, params)
    },
    // 提交改期订单
    async ticketChangeOrderSub(params) {
        let actiontype = 'Manage_TicketChangeHandler'
        return await this.fetch(actiontype, params)
    },
    // 非自愿改期自动改变支付状态
    async nonvoluntaryChangePay(params) {
    	let actiontype = 'OrderService_ChangePayStatus'
        return await this.fetch(actiontype, params)
    },
    // 提交支付订单
    async createReceiptOrder(params){
        let actiontype="createReceiptOrder";
        return await this.fetch(actiontype,params)
    }, 
    // 查询支付列表
    async getReceiptOrderList(params){
        let actiontype="getReceiptOrderList";
        return await this.fetch(actiontype,params)
    },
    // 查询支付订单详情
    async getReceiptOrderDetail(params){
        let actiontype="getReceiptOrderDetail";
        return await this.fetch(actiontype,params);
    },
    //申请退款
    async CreateRefundReceiptOrderPara(params){
        let actiontype='createRefundReceiptOrder';
        return await this.fetch(actiontype,params);
    },
    // 发送圣诞
    async sendReceiptCreateSuccessMessage(params){
        let actiontype="sendReceiptCreateSuccessMessage";
        return await this.fetch(actiontype,params);
    },
    // 订单回填
    async receiptOrderCompleted(params){
        let actiontype="receiptOrderCompleted";
        return await this.fetch(actiontype,params)
    },
    // 订单修改
    async receiptOrderModify(params){
        let actiontype="receiptOrderModify";
        return await this.fetch(actiontype,params);
    },
    // 订单取消
    async cancelReceiptOrder(params){
        let actiontype="cancelReceiptOrder";
        return await this.fetch(actiontype,params);
    },
    // 改期入口提交
    async getSaleOrderTidByTicketNo(params){
        let actiontype="getSaleOrderTidByTicketNo";
        return await this.fetch(actiontype,params)
    },
    // 重新投保接口
    async reInsurePut(params){
        let actiontype="reInsurePut";
        return await this.fetch(actiontype,params)
    }
}