(function(){var e={}.hasOwnProperty,t=function(t,n){function i(){this.constructor=t}for(var r in n)e.call(n,r)&&(t[r]=n[r]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};ChaiIo.Views.ReportsIndex=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.preRender=function(){},n.prototype.postRender=function(){},n.prototype.render=function(){var e;return this.preRender(),e=this.getTemplateName(),e===""?!1:($(this.el).html(ich[e](this.getData())),this.postRender(),!0)},n.prototype.getTemplateName=function(){return"report_"+this.model.get("report_type")},n.prototype.getData=function(){return this.model.toJSON()},n}(Backbone.View)}).call(this);