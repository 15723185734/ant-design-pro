(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7567],{70499:function(f){f.exports={activeChart:"antd-pro-pages-dashboard-monitor-components-active-chart-index-activeChart",activeChartGrid:"antd-pro-pages-dashboard-monitor-components-active-chart-index-activeChartGrid",activeChartLegend:"antd-pro-pages-dashboard-monitor-components-active-chart-index-activeChartLegend",dashedLine:"antd-pro-pages-dashboard-monitor-components-active-chart-index-dashedLine",line:"antd-pro-pages-dashboard-monitor-components-active-chart-index-line"}},19134:function(f){f.exports={mapChart:"antd-pro-pages-dashboard-monitor-style-mapChart",pieCard:"antd-pro-pages-dashboard-monitor-style-pieCard"}},49922:function(f,F,e){"use strict";e.r(F),e.d(F,{default:function(){return et}});var at=e(58024),c=e(39144),nt=e(13062),x=e(71230),st=e(89032),d=e(15746),rt=e(95300),h=e(7277),B=e(21010),G=e(35099),y=e(90829),R=e(92688),W=e(65337),b=e(21349),H=e(92077),A=e.n(H),U=e(2824),E=e(3182),S=e(69610),M=e(54941),N=e(81306),z=e(19809),J=e(94043),g=e.n(J),$=e(67294),p=e(78087),O=e(83832),t=e(85893),Q=["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],Y=function(l){(0,N.Z)(r,l);var i=(0,z.Z)(r);function r(){var a;(0,S.Z)(this,r);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return a=i.call.apply(i,[this].concat(n)),a.state={data:null,grid:null,loading:!1},a}return(0,M.Z)(r,[{key:"componentDidMount",value:function(){var a=(0,E.Z)(g().mark(function n(){var s,m,C,j;return g().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([fetch("https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json").then(function(D){return D.json()}),fetch("https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json").then(function(D){return D.json()})]);case 2:s=v.sent,m=(0,U.Z)(s,2),C=m[0],j=m[1],this.setState({data:C,grid:j,loading:!0});case 7:case"end":return v.stop()}},n,this)}));function o(){return a.apply(this,arguments)}return o}()},{key:"render",value:function(){var o=this.state,n=o.data,s=o.grid,m=o.loading;return m===!1?(0,t.jsx)(O.Z,{}):(0,t.jsxs)(p.JE,{map:{center:[110.19382669582967,50.258134],pitch:0,style:"blank",zoom:1},style:{position:"relative",width:"100%",height:"452px"},children:[s&&(0,t.jsx)(p.zP,{source:{data:s,transforms:[{type:"hexagon",size:8e5,field:"capacity",method:"sum"}]},color:{values:"#ddd"},shape:{values:"hexagon"},style:{coverage:.7,opacity:.8}},"1"),n&&[(0,t.jsx)(p.ns,{options:{autoFit:!0},source:{data:n},scale:{values:{color:{field:"cum_conf",type:"quantile"},size:{field:"cum_conf",type:"log"}}},color:{field:"cum_conf",values:Q},shape:{values:"circle"},active:{option:{color:"#0c2c84"}},size:{field:"cum_conf",values:[0,30]},style:{opacity:.8}},"2"),(0,t.jsx)(p.ns,{source:{data:n},color:{values:"#fff"},shape:{field:"Short_Name_ZH",values:"text"},filter:{field:"cum_conf",values:function(j){return j>2e3}},size:{values:12},style:{opacity:1,strokeOpacity:1,strokeWidth:0}},"5")]]})}}]),r}($.Component),L=e(86582),I=e(93343),K=e(70499),u=e.n(K);function V(l){return l*1<10?"0".concat(l):l}function T(){for(var l=[],i=0;i<24;i+=1)l.push({x:"".concat(V(i),":00"),y:Math.floor(Math.random()*200)+i*50});return l}var X=function(l){(0,N.Z)(r,l);var i=(0,z.Z)(r);function r(){var a;(0,S.Z)(this,r);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return a=i.call.apply(i,[this].concat(n)),a.state={activeData:T()},a.timer=void 0,a.requestRef=void 0,a.loopData=function(){a.requestRef=requestAnimationFrame(function(){a.timer=window.setTimeout(function(){a.setState({activeData:T()},function(){a.loopData()})},1e3)})},a}return(0,M.Z)(r,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var o=this.state.activeData,n=o===void 0?[]:o;return(0,t.jsxs)("div",{className:u().activeChart,children:[(0,t.jsx)(h.Z,{title:"\u76EE\u6807\u8BC4\u4F30",value:"\u6709\u671B\u8FBE\u5230\u9884\u671F"}),(0,t.jsx)("div",{style:{marginTop:32},children:(0,t.jsx)(I.Z,{autoFit:!0,data:n.map(function(s){return s.y}),height:84})}),n&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:u().activeChartGrid,children:[(0,t.jsxs)("p",{children:[(0,L.Z)(n).sort()[n.length-1].y+200," \u4EBF\u5143"]}),(0,t.jsxs)("p",{children:[(0,L.Z)(n).sort()[Math.floor(n.length/2)].y," \u4EBF\u5143"]})]}),(0,t.jsx)("div",{className:u().dashedLine,children:(0,t.jsx)("div",{className:u().line})}),(0,t.jsx)("div",{className:u().dashedLine,children:(0,t.jsx)("div",{className:u().line})})]}),n&&(0,t.jsxs)("div",{className:u().activeChartLegend,children:[(0,t.jsx)("span",{children:"00:00"}),(0,t.jsx)("span",{children:n[Math.floor(n.length/2)].x}),(0,t.jsx)("span",{children:n[n.length-1].x})]})]})}}]),r}($.Component);function w(){return Z.apply(this,arguments)}function Z(){return Z=(0,E.Z)(g().mark(function l(){return g().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,B.WY)("/api/tags"));case 1:case"end":return r.stop()}},l)})),Z.apply(this,arguments)}var k=e(19134),P=e.n(k),q=h.Z.Countdown,_=Date.now()+1e3*60*60*24*2+1e3*30,tt=function(){var i=(0,B.QT)(w),r=i.loading,a=i.data,o=(a==null?void 0:a.list)||[];return(0,t.jsx)(b.Z,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(x.Z,{gutter:24,children:[(0,t.jsx)(d.Z,{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsxs)(c.Z,{title:"\u6D3B\u52A8\u5B9E\u65F6\u4EA4\u6613\u60C5\u51B5",bordered:!1,children:[(0,t.jsxs)(x.Z,{children:[(0,t.jsx)(d.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(h.Z,{title:"\u4ECA\u65E5\u4EA4\u6613\u603B\u989D",suffix:"\u5143",value:A()(124543233).format("0,0")})}),(0,t.jsx)(d.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(h.Z,{title:"\u9500\u552E\u76EE\u6807\u5B8C\u6210\u7387",value:"92%"})}),(0,t.jsx)(d.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(q,{title:"\u6D3B\u52A8\u5269\u4F59\u65F6\u95F4",value:_,format:"HH:mm:ss:SSS"})}),(0,t.jsx)(d.Z,{md:6,sm:12,xs:24,children:(0,t.jsx)(h.Z,{title:"\u6BCF\u79D2\u4EA4\u6613\u603B\u989D",suffix:"\u5143",value:A()(234).format("0,0")})})]}),(0,t.jsx)("div",{className:P().mapChart,children:(0,t.jsx)(Y,{})})]})}),(0,t.jsxs)(d.Z,{xl:6,lg:24,md:24,sm:24,xs:24,children:[(0,t.jsx)(c.Z,{title:"\u6D3B\u52A8\u60C5\u51B5\u9884\u6D4B",style:{marginBottom:24},bordered:!1,children:(0,t.jsx)(X,{})}),(0,t.jsx)(c.Z,{title:"\u5238\u6838\u6548\u7387",style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1,children:(0,t.jsx)(G.Z,{height:180,autoFit:!0,percent:.87,range:{ticks:[0,1/4,2/4,3/4,1]},axis:{label:{formatter:function(s){return Number(s)*100}}},statistic:{content:{content:"\u4F18",style:{color:"#30bf78"}}}})})]})]}),(0,t.jsxs)(x.Z,{gutter:24,children:[(0,t.jsx)(d.Z,{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsx)(c.Z,{title:"\u5404\u54C1\u7C7B\u5360\u6BD4",bordered:!1,className:P().pieCard,children:(0,t.jsxs)(x.Z,{style:{padding:"16px 0"},children:[(0,t.jsx)(d.Z,{span:8,children:(0,t.jsx)(y.Z,{autoFit:!0,height:128,percent:.28})}),(0,t.jsx)(d.Z,{span:8,children:(0,t.jsx)(y.Z,{color:"#5DDECF",autoFit:!0,height:128,percent:.22})}),(0,t.jsx)(d.Z,{span:8,children:(0,t.jsx)(y.Z,{color:"#2FC25B",autoFit:!0,height:128,percent:.32})})]})})}),(0,t.jsx)(d.Z,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsx)(c.Z,{title:"\u70ED\u95E8\u641C\u7D22",loading:r,bordered:!1,bodyStyle:{overflow:"hidden"},children:(0,t.jsx)(R.Z,{data:o,autoFit:!0,wordField:"name",weightField:"value",colorField:"name",height:162,wordStyle:{fontSize:[10,20]}})})}),(0,t.jsx)(d.Z,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24},children:(0,t.jsx)(c.Z,{title:"\u8D44\u6E90\u5269\u4F59",bodyStyle:{textAlign:"center",fontSize:0},bordered:!1,children:(0,t.jsx)(W.Z,{height:161,percent:.35,autoFit:!0,outline:{border:2,distance:4},padding:[0,0,0,0],statistic:{content:{style:{fontSize:"16px"}}}})})})]})]})})},et=tt}}]);
