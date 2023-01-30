sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap.ui.core/UIComponent",
        "sap/ui/core/routing/History",
    ],


    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent, History) {
        "use strict";

        return Controller.extend("zbtp.day6exercise3zaragoza.controller.Detail", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var oParam1 = oEvent.getParameter("arguments").Param1;
                var oParam1 = oEvent.getParameter("arguments").Param2;

                var oInput1 = this.getView().byId("idInput1")
                var oInput1 = this.getView().byId("idInput2")

                oInput.setValue(oParam1);
                oInput.setValue(oParam2);
            },
            //When triggered, when back button is pressed. 
            //Triggers navigation back to previous page.

            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                
                if (sPreviousHash && sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteOverview");
                }
            }
        });

    });