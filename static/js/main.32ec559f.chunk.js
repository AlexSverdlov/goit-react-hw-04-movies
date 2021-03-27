(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{20:function(t,e,n){t.exports={container:"MovieDetailsPage_container__38mZQ",containerAbout:"MovieDetailsPage_containerAbout__1mfU_",image:"MovieDetailsPage_image__1-ZsI"}},39:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(32),s=n.n(r),i=(n(39),n(7)),o=n(2),h=n(8),u=n.n(h),l=n(15),p=n(10),j=n(11),b=n(14),d=n(13),m=n(12),v=n.n(m),f=n(0),O=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={films:[]},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=bbc6386a0bc633f77c6faed806ceae64").then((function(t){return t.data.results}));case 2:e=t.sent,this.setState({films:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Trending today"}),Object(f.jsx)("ul",{children:this.state.films.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:{pathname:"/movies/".concat(e.id),state:{from:t.props.location}},children:e.title})},e.id)}))}),Object(f.jsx)("hr",{})]})}}]),n}(a.Component),x=n(34),g=n.n(x),y=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={cursearch:"",films:[]},t.getCategoryFromProps=function(t){return g.a.parse(t.location.search).query},t.getFromAPI=function(e){v.a.get("https://api.themoviedb.org/3/search/movie?api_key=bbc6386a0bc633f77c6faed806ceae64&query=".concat(e)).then((function(t){return t.data.results})).then((function(e){return t.setState({films:e,cursearch:""})}))},t.handleChange=function(e){var n=e.currentTarget.value;t.setState({cursearch:n})},t.handleClick=function(e){t.props.history.push({pathname:t.props.location.pathname,search:"query=".concat(t.state.cursearch)})},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=this.getCategoryFromProps(this.props);t&&this.getFromAPI(t)}},{key:"componentDidUpdate",value:function(t,e){var n=this.getCategoryFromProps(t),a=this.getCategoryFromProps(this.props);n!==a&&this.getFromAPI(a)}},{key:"render",value:function(){var t=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",{type:"text",value:this.state.cursearch,onChange:this.handleChange}),Object(f.jsx)("button",{type:"button",onClick:this.handleClick,children:"Find"}),Object(f.jsx)("ul",{children:this.state.films.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:{pathname:"/movies/".concat(e.id),state:{from:t.props.location}},children:e.title})},e.id)}))})]})}}]),n}(a.Component),k=n(17),w=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={cast:[]},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US")).then((function(t){return t.data}));case 3:n=t.sent,this.setState(Object(k.a)({},n));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)("ul",{children:this.state.cast.map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsx)("p",{children:t.name}),Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+t.profile_path,alt:"",style:{height:200}}),Object(f.jsxs)("p",{children:["character: ",t.character]})]},t.credit_id)}))})}}]),n}(a.Component),_=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={results:[]},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US&page=1")).then((function(t){return t.data}));case 3:n=t.sent,this.setState(Object(k.a)({},n));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)("ul",{children:this.state.results.map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{children:["Author: ",t.author]}),Object(f.jsx)("p",{children:t.content})]},t.id)}))})}}]),n}(a.Component),C=n(20),A=n.n(C),N=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={poster_path:"",title:"",release_date:"",overview:"",genres:[]},t.handleGoBack=function(){var e=t.props,n=e.location,a=e.history;n.state&&n.state.from&&a.push(n.state.from)},t}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US")).then((function(t){return t.data}));case 3:n=t.sent,this.setState(Object(k.a)({},n));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t="https://image.tmdb.org/t/p/w500"+this.state.poster_path;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:this.handleGoBack,children:"Go back"}),Object(f.jsxs)("div",{className:A.a.container,children:[Object(f.jsx)("img",{src:t,alt:"",className:A.a.image}),Object(f.jsxs)("div",{className:A.a.containerAbout,children:[Object(f.jsxs)("h2",{children:[this.state.title," (",this.state.release_date.substring(0,4),")"]}),Object(f.jsx)("h3",{children:"Overview"}),Object(f.jsx)("p",{children:this.state.overview}),Object(f.jsx)("h4",{children:"Genres"}),Object(f.jsx)("p",{children:this.state.genres.map((function(t){return Object(f.jsxs)("span",{children:[" ",t.name," "]},t.id)}))})]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)("h4",{children:"Additional information"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(this.props.match.url,"/cast"),children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(this.props.match.url,"/reviews"),children:"Reviews"})})]}),Object(f.jsx)("hr",{}),Object(f.jsx)(o.a,{path:"".concat(this.props.match.path,"/cast"),component:w}),Object(f.jsx)(o.a,{path:"".concat(this.props.match.path,"/reviews"),component:_})]})}}]),n}(a.Component);n(69);var F=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("header",{children:Object(f.jsxs)("ul",{className:"navigation",children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink-active",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{exact:!0,to:"/movies",className:"NavLink",activeClassName:"NavLink-active",children:"Moves"})})]})}),Object(f.jsx)("main",{children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{exact:!0,path:"/",component:O}),Object(f.jsx)(o.a,{path:"/movies/:movieId",component:N}),Object(f.jsx)(o.a,{path:"/movies",component:y}),Object(f.jsx)(o.a,{component:O})]})})]})};s.a.render(Object(f.jsx)(i.a,{children:Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(F,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.32ec559f.chunk.js.map