(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["steps-select-t"],{"1d41":function(t,a,e){},"4fb1":function(t,a,e){"use strict";e("1d41")},9105:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-alert",{attrs:{title:"Please pay attention when setting the objective function parameters",type:"warning",closable:!1}}),t.specificCharacterTargets?[e("h3",{staticClass:"title"},[t._v("Character Exclusive")]),t._l(t.specificCharacterTargets,(function(a){return e("div",{key:a.name,staticClass:"hand item",class:{active:a.name===t.targetFuncName},on:{click:function(e){return t.handleChange(a.name)}}},[e("div",[e("img",{staticClass:"image",attrs:{src:a.badge}})]),e("div",{staticClass:"detail"},[e("span",{staticClass:"target-title"},[t._v(t._s(a.chs))]),a.recommend?e("span",{staticClass:"is-recommend"},[t._v("Recommended")]):t._e(),e("div",{staticClass:"description fs-12"},t._l(a.description,(function(a,n){return e("span",{key:n},[t._v(" "+t._s(a)+" ")])})),0)]),e("div",{staticClass:"tags"},t._l(a.tags,(function(a,n){return e("span",{key:n,staticClass:"tag"},[t._v(" "+t._s(a)+" ")])})),0)])}))]:t._e(),e("h3",{staticClass:"title"},[t._v("Universal")]),t._l(t.commonTargets,(function(a){return e("div",{key:a.name,staticClass:"hand item",class:{active:a.name===t.targetFuncName},on:{click:function(e){return t.handleChange(a.name)}}},[e("div",[e("img",{staticClass:"image",attrs:{src:a.badge}})]),e("div",{staticClass:"detail"},[e("span",{staticClass:"target-title"},[t._v(t._s(a.chs))]),a.formula?e("span",{staticClass:"formula"},[t._v(t._s(a.formula))]):t._e(),e("div",{staticClass:"description fs-12"},t._l(a.description,(function(a,n){return e("span",{key:n},[t._v(" "+t._s(a)+" ")])})),0)]),e("div",{staticClass:"tags"},t._l(a.tags,(function(a,n){return e("span",{key:n,staticClass:"tag"},[t._v(" "+t._s(a)+" ")])})),0)])}))],2)},s=[],c=(e("d3b7"),e("6062"),e("3ca3"),e("ddb0"),e("159b"),e("07ac"),e("b0c0"),e("3ab5")),i={},r=new Set;Object.values(c["a"]).forEach((function(t){i[t["for"]]||(i[t["for"]]=[]),"common"===t["for"]&&r.add(t.name),i[t["for"]].push(t)}));var o={name:"SelectTargetFunction",inject:["notifyChange"],created:function(){this.commonTargets=i["common"]},data:function(){return{characterName:"anbo",targetFuncName:"expect"}},methods:{getTargetFuncName:function(){return this.targetFuncName},setTargetFuncName:function(t,a){this.characterName=t,this.targetFuncName=a},handleChange:function(t){t!==this.targetFuncName&&(this.targetFuncName=t,this.notifyChange("targetFunc",t))},setCharacterName:function(t){if(t!==this.characterName){this.characterName=t;var a=this.targetFuncName;if(Object.prototype.hasOwnProperty.call(i,t)){if("common"!==c["a"][this.targetFuncName]["for"]){var e=i[t][0];a=e.name}}else{var n=i.common[0];a=n.name}this.handleChange(a)}}},computed:{specificCharacterTargets:function(){return i[this.characterName]}}},u=o,f=(e("4fb1"),e("2877")),l=Object(f["a"])(u,n,s,!1,null,"72ec6572",null);a["default"]=l.exports},aa11:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.tf.config?e(t.tf.config,{ref:"config",tag:"component"}):e("div",[e("el-alert",{staticStyle:{"margin-bottom":"20px"},attrs:{title:"This function has no parameters to be configured",closable:!1}})],1)],1)},s=[],c=(e("b0c0"),e("3ab5")),i={name:"ConfigTargetFunction",data:function(){return{targetFuncName:"expect"}},methods:{getConfig:function(){if(!this.tf.config)return{};var t=this.$refs.config;if(t.compact)return t.compact();var a=Object.assign({},t.$data);return a},getTargetFuncConfig:function(){return this.getConfig()},setTargetFuncConfig:function(t){var a=this;c["a"][t.name]&&(this.targetFuncName=t.name,this.$nextTick((function(){var e;a.tf.config&&a.$refs.config.setData(null!==(e=t.args)&&void 0!==e?e:{})})))},setTargetFuncName:function(t){t!==this.targetFuncName&&c["a"][t]&&(this.targetFuncName=t)}},computed:{tf:function(){return c["a"][this.targetFuncName]}}},r=i,o=e("2877"),u=Object(o["a"])(r,n,s,!1,null,null,null);a["default"]=u.exports}}]);