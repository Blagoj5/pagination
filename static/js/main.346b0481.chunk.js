(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{551:function(n,e,t){},552:function(n,e,t){"use strict";t.r(e);var a=t(587),i=t(0),o=t.n(i),r=t(164),s=t.n(r),p=t(586),c=t(590),l=t(576),g=t(583),u=t(579),d=t(577),m=t(578),b=t(588),h="installation/",j="usage/",x=t(7),f=t(13),O=t(573),P=t(2),v=function(n){var e=n.id,t=n.name,a=Object(f.a)(n,["id","name"]);return Object(P.jsx)(O.a,Object(x.a)(Object(x.a)({p:4,cursor:"pointer",d:"block",href:"#".concat(e)},a),{},{children:t}))},w=function(n){var e=n.item,t="";switch(e.id){case"installation":t=h;break;case"usage":t=j;break;default:t=""}return Object(P.jsx)(b.a,{allowMultiple:!0,children:Object(P.jsxs)(b.d,{border:"none",children:[Object(P.jsx)("h2",{children:Object(P.jsxs)(b.b,{_focus:{},children:[Object(P.jsx)(l.a,{fontSize:"lg",flex:"1",textAlign:{lg:"left",base:"center"},py:2,children:e.name}),Object(P.jsx)(b.c,{})]})}),Object(P.jsx)(b.e,{pb:4,shadow:"inner",bg:"#edeef1",children:e.subContent.map((function(n){return Object(P.jsx)(v,{name:n.name,id:t+n.id,py:2,fontSize:"md",children:n},n.id)}))})]})},e.id)},y=function(n){var e=n.item,t=Object(P.jsx)(v,{id:e.id,name:e.name});return e.subContent&&(t=Object(P.jsx)(w,{item:e})),Object(P.jsxs)(d.a,{fontSize:"lg",color:"black",children:[t,Object(P.jsx)(m.a,{})]},e.id)},k=[{id:"playground",name:"Playground"},{id:"installation",name:"Installation",subContent:[{id:"pagination",name:"pagination"},{id:"use-pagination",name:"use-pagination"},{id:"with-pagination",name:"with-pagination"},{id:"pagination-wrapper",name:"pagination-wrapper"},{id:"paginator",name:"paginator"}]},{id:"usage",name:"Usage",subContent:[{id:"pagination",name:"pagination"},{id:"use-pagination",name:"use-pagination"},{id:"with-pagination",name:"with-pagination"},{id:"pagination-wrapper",name:"pagination-wrapper"},{id:"paginator",name:"paginator"}]},{id:"api",name:"API",subContent:[{id:"pagination-options",name:"Pagination Options"},{id:"pagination-result/return",name:"Pagination Result/Return"},{id:"paginator",name:"Paginator"}]},{id:"more-info",name:"More Info",subContent:[{id:"prerequisites",name:"Prerequisites"},{id:"versioning",name:"Versioning"},{id:"authors",name:"Authors"},{id:"security",name:"Security"},{id:"license",name:"License"}]}],z=function(){return Object(P.jsxs)(l.a,{as:"aside",minH:{base:"auto",lg:"100vh"},overflowX:"auto",background:"white",w:{base:"100%",lg:"280px"},h:{base:"fit-content",lg:"100vh"},position:{base:"relative",lg:"sticky"},left:0,top:0,flex:"none",children:[Object(P.jsx)(u.a,{as:"h4",size:"md",fontWeight:"bold",p:"4",bg:"primary.main",color:"white",textAlign:"center",children:"@bazhe/pagination"}),Object(P.jsx)(d.b,{listStyleType:"none",w:"100%",ml:0,textAlign:{base:"center",lg:"left"},children:k.map((function(n,e){return Object(P.jsx)(y,{item:n},n.id)}))})]})},C=t(581),R=t(593),T=t(582),_=t(165),I=t.n(_),S=t(591),D=t(580),B=t(166),F=t.n(B),N=function(n){var e=n.markdown,t=n.id,a=n.prefix,i=void 0===a?"":a;return Object(P.jsx)(l.a,{id:t,as:"section",w:{base:"100%",lg:"80%"},children:Object(P.jsx)(I.a,{plugins:[F.a],components:{h1:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(u.a,Object(x.a)({as:"h1",size:"xl",mb:4},e))},h2:function(n){var e=n.node,t=Object(f.a)(n,["node"]);return Object(P.jsx)(u.a,Object(x.a)({id:e.children[0].value.toLowerCase(),as:"h2",size:"lg",my:4},t))},h3:function(n){var e=n.node,t=Object(f.a)(n,["node"]);return Object(P.jsx)(u.a,Object(x.a)({id:(i+e.children[0].value).split(" ").join("-").toLowerCase(),as:"h3",size:"md",my:4},t))},h4:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(u.a,Object(x.a)({as:"h4",size:"sm",my:4},e))},h5:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(u.a,Object(x.a)({as:"h5",size:"xs",my:4},e))},code:function(n){n.node;var e=n.className,t=n.inline,a=n.children,i=Object(f.a)(n,["node","className","inline","children"]),o=/language-(\w+)/.exec(e||"");return!t&&o?Object(P.jsx)(S.a,Object(x.a)(Object(x.a)({},i),{},{style:D.a,language:o[0].split("-")[1],PreTag:"div",children:String(a).replace(/\n$/,"")})):Object(P.jsx)(l.a,Object(x.a)({as:"pre",py:4,px:2,shadow:"inner",bg:"gray.100",mb:4,className:e,children:a},i))},p:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(C.a,Object(x.a)(Object(x.a)({},e),{},{mb:1}))},a:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(O.a,Object(x.a)(Object(x.a)({},e),{},{color:"blue.500"}))},ul:function(n){n.node,n.ordered;var e=Object(f.a)(n,["node","ordered"]);return Object(P.jsx)(d.b,Object(x.a)({listStylePos:"inside"},e))},li:function(n){n.node,n.ordered;var e=Object(f.a)(n,["node","ordered"]);return Object(P.jsx)(d.a,Object(x.a)({},e))},table:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(T.a,Object(x.a)(Object(x.a)({variant:"simple"},e),{},{shadow:"lg",mt:2,mb:4,overflowX:"auto",w:"full",d:{base:"block",md:"table"}}))},thead:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(T.e,Object(x.a)({bg:"primary.main"},e))},tbody:function(n){n.node;var e=Object(f.a)(n,["node"]);return Object(P.jsx)(T.b,Object(x.a)({},e))},tr:function(n){n.node,n.isHeader;var e=Object(f.a)(n,["node","isHeader"]);return Object(P.jsx)(T.f,Object(x.a)({},e))},th:function(n){n.node,n.isHeader;var e=Object(f.a)(n,["node","isHeader"]);return Object(P.jsx)(T.d,Object(x.a)({color:"white"},e))},td:function(n){n.node,n.isHeader;var e=Object(f.a)(n,["node","isHeader"]);return Object(P.jsx)(T.c,Object(x.a)({},e))}},children:e})})},A=function(){return Object(P.jsx)(N,{markdown:"## API    \n\n\n### Pagination Options\n\n\n| Name         | Type                | Default      | Description                                                                                                              |\n| ------------ | ------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |\n| items        | T[] \\| undefined    | []           | Initial items for the pagination                                                                                         |\n| limit        | number \\| undefined | 4            | The limit of items per page                                                                                              |\n| currentPage  | number \\| undefined | 1            | The current page                                                                                                         |\n| links        | number \\| undefined | 10           | Links is the number of pages/links/buttons to display. Example: How many buttons you want to show in the pagination bar? |\n| totalResults | number \\| undefined | items.length | Total results is the maximum number of items. Usually refers to items.length (so there's no need to pass it)             |\n\n### Pagination Result/Return\n\nThe results from the pagination are inside of the paginationResult object\n\n- **paginationResult**\n\n| Name              | Type                | Description                                                                                                               |\n| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- |\n| items             | T[] \\| undefined    | The items that will change depending on the pagination (currentPage, limit ...)                                           |\n| all_items         | T[] \\| undefined    | Initial/All items for the pagination                                                                                      |\n| total_pages       | number \\| undefined | The total pages for the provided items. Example: 12 items with limit 2 -> 6 total pages                                   |\n| pages             | number              | The number of pages between range(first_page, last_page)                                                                  |\n| current_page      | number              | Current page                                                                                                              |\n| first_page        | number              | First page, depends on the link (buttons/links to display in the pagination bar) and limit (items per page)               |\n| last_page         | number              | Last page, depends on the link (buttons/links to display in the pagination bar) and limit (items per page)                |\n| previous_page     | number              | Previous page, current_page - 1                                                                                           |\n| next_page         | number              | Next page, current_page + 1                                                                                               |\n| has_previous_page | boolean             |\n| has_next_page     | boolean             |\n| total_results     | number              | The length of the initial items                                                                                           |\n| results           | number              | Results per page                                                                                                          |\n| first_result      | number              | First result is the index of the item that's first for the current page - items[first_result] (depends on link and limit) |\n| last_result       | number              | Last result is the index of the item that's last for the current page - items[last_result] (depends on link and limit)    |\n| limit             | number              | The limit of items per page                                                                                               |\n\n- **Pagination handlers for managing state**\n\n| Name            | Type                                                   | Description                                                         |\n| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------- |\n| setCurrentPage  | (n: number) => void                                    | Function handler for changing the current page                      |\n| setItems        | (items: T[]) => void                                   | Function handler for changing the items                             |\n| setPageAndItems | (payload: { items: I[]; currentPage: number }) => void | Function handler for changing current page and the items themselves |\n| nextPage        | () => void                                             | Function handler for changing to next page                          |\n| previousPage    | () => void                                             | Function handler for changing to previous page                      |\n\n### Paginator\n\nThe main class that is responsible for the pagination logic:\n\nIn the table bellow you can see some of the Paginator class methods and their usage\n\n| Name                                        | Type                                                                                | Description                                                                                     |\n| ------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |\n| constructor(perPage: number, links: number) |                                                                                     | The constructor that creates paginator object. Example: new Paginator(4, 10)                    |\n| build                                       | \\<T>(total_results: number, current_page?: number, items?: T[]) => [PaginationResult](#pagination-result/return) | The main method that returns the fully expected pagination result                              |\n| getFirstPage                                | (currentPage: number) => number                                                     | Gets first page, depending on the number of links (ex. buttons displayed in the pagination bar) |\n| getLastPage                                 | (currentPage: number) => number                                                     | Gets last page, depending on the number of links (ex. buttons displayed in the pagination bar)  |\n| getFirstResult                              | (currentPage: number) => number                                                     | Gets first result/index, depending on the limit/perPage and current page                        |\n| getLastResult                               | (currentPage: number) => number                                                     | Gets last result/index, depending on the limit/perPage and current page                      \n"})},H="## Installation    \n\n### pagination\n\nYou can choose to install all pagination packages and all utilities that come with the packages (bundled in one):\n\n~~~bash\nnpm install @bazhe/pagination\nor\nyarn install @bazhe/pagination\n~~~\n\n**or you can install each package individually:**\n\n\n### use-pagination\n\nReact hook for handling your pagination. Depends on: [@bazhe/paginator](#".concat(h,"paginator)\n\n~~~bash\nnpm install @bazhe/use-pagination\nor\nyarn install @bazhe/use-pagination\n~~~\n\n### with-pagination\n\nReact Higher-Order Component for handling your pagination. Depends on: [@bazhe/paginator](#").concat(h,"paginator)\n\n~~~bash\nnpm install @bazhe/with-pagination\nor\nyarn install @bazhe/with-pagination\n~~~\n\n### pagination-wrapper\n\nReact Wrapper Component for handling your pagination\n\n~~~bash\nnpm install @bazhe/pagination-wrapper\nor\nyarn install @bazhe/pagination-wrapper\n~~~\n\n### paginator\n\nUtilities for handling your pagination. Used in: [@bazhe/use-pagination](#").concat(h,"use-pagination), [@bazhe/with-pagination](#").concat(h,"with-pagination), [@bazhe/pagination-wrapper](#").concat(h,"pagination-wrapper)\n\n~~~bash\nnpm install @bazhe/paginator\nor\nyarn install @bazhe/paginator\n~~~\n\n"),L=function(){return Object(P.jsx)(N,{markdown:H,prefix:h})},W=function(){return Object(P.jsx)(N,{markdown:'## More Info    \n\n### Prerequisites\n\nFor all packages except @baze/paginator, react-dom and react above version 16 is recommended:\n\n~~~js\n"react": ">=16.0.0",\n"react-dom": ">=16.0.0"\n~~~\n\n### Versioning\n\nWe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Blagoj5/pagination/tags).\n\n### Authors\n\n- **[Blagoj Petrov](https://github.com/Blagoj5)**\n\n### Security\n\nThis project doesn\u2019t have any security concerns.\n\n### License\n\nThis project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Blagoj5/pagination/blob/main/LICENSE) file for details\n'})},J=t(19),E=t(170),G=t(584),M=t(585),U=t(589),V=t(592),q=function(n){var e=n.children,t=n.onClick,a=Object(f.a)(n,["children","onClick"]);return Object(P.jsx)(V.a,Object(x.a)(Object(x.a)({bg:"primary.main",onClick:t,color:"white",_hover:{bg:"blue.600"},_focus:{},_active:{}},a),{},{children:e}))},X=["item-one","item-two","item-three","item-four","item-five","item-six","item-seven"],Y=function(){var n,e=Object(E.usePagination)({items:X,limit:2}),t=e.paginationResult,a=e.nextPage,i=e.previousPage,r=e.setCurrentPage,s=e.setItems,p=o.a.useRef(null);return Object(P.jsxs)(l.a,{id:"playground",w:"90%",maxW:"900px",shadow:"xl",rounded:"2xl",alignItems:"stretch",maxH:{base:"100vh",md:"fit-content"},overflowY:"auto",children:[Object(P.jsxs)(u.a,{as:"h2",bg:"primary.main",color:"white",size:"lg",p:4,roundedTop:"2xl",textAlign:"center",children:["Pagination data and methods:"," "]}),Object(P.jsxs)(g.a,{direction:{base:"column",md:"row"},roundedBottom:"2xl",p:4,justify:"space-between",children:[Object(P.jsxs)(R.a,{w:"100%",spacing:4,m:2,children:[Object(P.jsx)(u.a,{as:"h4",size:"md",textAlign:"center",children:"Methods:"}),Object(P.jsx)(m.a,{}),Object(P.jsxs)(g.a,{w:"100%",justify:"center",mt:0,children:[Object(P.jsx)(q,{onClick:function(){return i()},mr:8,isDisabled:!t.has_previous_page,children:"Prev Page"}),Object(P.jsx)(q,{onClick:function(){return a()},isDisabled:!t.has_next_page,children:"Next Page"})]}),Object(P.jsx)(m.a,{}),Object(P.jsxs)("div",{className:"mb-4",children:[Object(P.jsx)(G.a,{htmlFor:"current-page",children:"Set current page"}),Object(P.jsxs)(U.c,{id:"current-page",placeholder:"Set current page",value:t.current_page,onChange:function(n,e){return r(e)},children:[Object(P.jsx)(U.d,{}),Object(P.jsxs)(U.e,{children:[Object(P.jsx)(U.b,{}),Object(P.jsx)(U.a,{})]})]})]}),Object(P.jsx)(m.a,{}),Object(P.jsxs)(l.a,{w:"100%",children:[Object(P.jsxs)(l.a,{as:"form",className:"mb-4",mb:4,children:[Object(P.jsx)(G.a,{htmlFor:"items",children:"Add/Remove items:"}),Object(P.jsxs)(g.a,{children:[Object(P.jsx)(M.a,{ref:p,id:"items",type:"text",placeholder:"Add item",roundedRight:"none"}),Object(P.jsx)(q,{type:"submit",onClick:function(n){n.preventDefault(),t.all_items&&p.current&&s([].concat(Object(J.a)(t.all_items),[p.current.value]))},roundedLeft:"none",children:"+"})]})]}),Object(P.jsx)(d.b,{className:"mx-auto w-5/6 max-h-32 overflow-y-auto shadow-md",listStyleType:"none",shadow:"inner",border:"1px solid",borderColor:"gray.100",ml:0,maxH:"250px",overflowY:"auto",children:null===(n=t.all_items)||void 0===n?void 0:n.map((function(n,e){return Object(P.jsx)(d.a,{p:4,onClick:function(){return function(n){var e;t.all_items&&s(null===(e=t.all_items)||void 0===e?void 0:e.filter((function(e){return e!==n})))}(n)},textAlign:"center",borderBottom:"1px solid",borderColor:"gray.200",cursor:"pointer",transition:"all 0.2s",css:"\n                    :hover {\n                      position: relative;\n                      :before {\n                        position: absolute;\n                        content: 'Remove';\n                        background: #fda1a1;\n                        top: 0;\n                        bottom: 0;\n                        left: 0;\n                        right: 0;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        color: white;\n                      }\n                    }\n                  ",children:n},n+e)}))})]})]}),Object(P.jsx)(m.a,{orientation:"vertical",height:"auto"}),Object(P.jsxs)(l.a,{pl:3,children:[Object(P.jsx)(u.a,{as:"h4",size:"md",textAlign:"center",children:"Data:"}),Object(P.jsx)("pre",{style:{fontSize:"14px"},children:JSON.stringify(t,null,2)})]})]})]})},$="## Usage    \n\n\n### pagination\n\n#### Import\n\n\n~~~jsx\n// React.js:\nimport { usePagination } from '@bazhe/pagination'; // Custom hook\nimport { Pagination } from '@bazhe/pagination'; // Pagination wrapper\nimport { withPagination } from '@bazhe/pagination'; // HOC for pagination\n// React.js | Vanilla JavaScript:\nimport { Paginator, generatePaginator } from '@bazhe/paginator'; // Utilities for pagination\n~~~\n\n#### Initialization\n\n- [@bazhe/use-pagination](#".concat(j,"use-pagination)\n- [@bazhe/pagination-wrapper](#").concat(j,"pagination-wrapper)\n- [@bazhe/with-pagination](#").concat(j,"with-pagination)\n- [@bazhe/paginator](#").concat(j,"paginator)\n\n\n### use-pagination\n\n#### Import\n\n\nTypescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hook-demo.tsx](https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hook-demo.tsx)\n\n~~~jsx\nimport { usePagination } from '@bazhe/use-pagination';\n~~~\n\n#### Initialization\n\n**Syntax**: usePagination([paginationOptions](#pagination-options))\n\n**Returns**: [PaginationResult](#pagination-result/return)\n\n~~~jsx\nexport const PaginationHookDemo: React.FC = () => {\n  const {\n    paginationResult,\n    nextPage,\n    previousPage,\n    setCurrentPage,\n    setItems,\n  } = usePagination({\n    items: defaultItems,\n    limit: 2,\n  });\n\n  return (\n    <div>\n      Pagination data:\n      <pre>{JSON.stringify(paginationResult, null, 2)}</pre>\n    </div>\n  );\n};\n~~~\n\n### with-pagination\n\n#### Import\n\n\nTypescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hoc-demo.tsx\n](https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-hoc-demo.tsx\n)\n\n~~~jsx\nimport { withPagination } from '@bazhe/with-pagination';\n~~~\n\n#### Initialization\n\n**Syntax**: withPagination(WrappedComponent, [paginationOptions](#pagination-options))\n\n**Returns**: [PaginationResult](#pagination-result/return) as props to the wrapped component\n\n**Function based components**\n~~~jsx\nconst fakeData = [1, 2, 3]\n\nconst FunctionalBasedComponent = ({\n  paginationResult,\n  nextPage,\n  previousPage,\n  setItems,\n  setCurrentPage,\n}: WithPaginationProps<typeof fakeData[0]>) => {\n  // pass the typeof the element in this case items have number\n\n  return (\n    <div>\n        The pagination result:\n        <pre>{JSON.stringify(paginationResult)}</pre>\n    </div>\n    );\n};\n\nexport const PaginationHocHookDemo = withPagination(FunctionalBasedComponent, {\n  items: fakeData,\n  limit: 2,\n});\n~~~\n\n**Class based components**\n~~~jsx\nconst fakeData = [1, 2, 3]\n\nclass ClassBasedComponent extends React.Component<\n  WithPaginationProps<typeof fakeData[0]>\n> {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    const {\n      nextPage,\n      paginationResult,\n      previousPage,\n      setCurrentPage,\n      setItems,\n    } = this.props;\n\n  return (\n    <div>\n        The pagination result:\n        <pre>{JSON.stringify(paginationResult)}</pre>\n    </div>\n    );\n  }\n}\n\nexport const PaginationHocHookDemo = withPagination(ClassBasedComponent, {\n  items: fakeData,\n  limit: 2,\n});\n~~~\n\n### pagination-wrapper\n\n#### Import\n\nTypescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-wrapper-demo.tsx](https://github.com/Blagoj5/pagination/blob/main/example/components/pagination-wrapper-demo.tsx)\n\n~~~jsx\nimport { Pagination } from '@bazhe/pagination-wrapper';\n~~~\n\n#### Initialization\n\n**Syntax:** \\<Pagination paginationOptions={[paginationOptions](https://blagoj5.github.io/pagination/#pagination-options)} render={WrappedComponent} />  \nor  \n**Syntax:** \\<Pagination  \npaginationOptions={[paginationOptions](#pagination-options)}>  \n{([paginationResult](#pagination-result/return)) => (\\<WrappedComponent {...paginationResult} />)}  \n\\</Pagination>\n\n**Returns:** [PaginationResult](https://blagoj5.github.io/pagination/#pagination-result/return) as props to the wrapped component (if render method is used) or as the first argument in the children callback function\n\n~~~jsx\nconst Playground = (props) => {\n    return <pre>{JSON.stringify(props.paginationResult, null, 2)}</pre>\n}\n\n\nconst fakeData = [1, 2, 3]\n\nexport const PaginationWrapper = () => {\n  // With children callback\n  return (\n    <Pagination paginationOptions={{ items: fakeData, limit: 2 }}>\n      {props => <Playground {...props} />}\n    </Pagination>\n  );\n\n  // Another example with callback\n  return (<Pagination paginationOptions={{items: fakeData, limit: 2}}>\n    {({nextPage, paginationResult, previousPage, setCurrentPage, setItems }) => {\n      // do something with the data from above\n      // ...\n      return null; // return anything / JSX ... / string etc...\n    }\n  </Pagination>)\n\n   //   With render prop\n  return (\n    <Pagination paginationOptions={{ items, limit: 2 }} render={Playground} />\n  );\n};\n~~~\n\n### paginator\n\n\nTypescript usage example in: [https://github.com/Blagoj5/pagination/blob/main/example/components/paginator-demo.tsx](https://github.com/Blagoj5/pagination/blob/main/example/components/paginator-demo.tsx)\n\n#### Import\n\n~~~js\nimport { Paginator } from '@bazhe/paginator'; // The paginator class itself, provides with a lot of methods for building your pagination object\nimport { generatePaginator } from '@bazhe/paginator'; // Implements Paginator class and creates the paginator object. generatePaginator is an initializer for the Paginator class (in case you don't want to use it manually)\n~~~\n\n#### Initialization\n\n**Syntax**: generatePaginator([paginationOptions](#pagination-options))\n\n**Returns**: [PaginationResult](#pagination-result/return)\n\n~~~js\nexport const Paginator: React.FC = () => {\n  return (\n    <div\n      style={{\n        padding: '1rem',\n        boxShadow: '2px 2px 7px 0 gray',\n        width: '30%',\n        background: 'white',\n      }}\n    >\n      <h3>Generate paginator</h3>\n      <pre>\n        {JSON.stringify(\n          generatePaginator({ items: [], currentPage: 1 }),\n          null,\n          2\n        )}\n      </pre>\n    </div>\n  );\n};\n~~~\n\n"),K=function(){return Object(P.jsx)(N,{markdown:$,prefix:j})},Q=function(){return Object(P.jsxs)(l.a,{p:6,flex:"auto",w:{lg:"85%",base:"100%"},bg:"gray.50",children:[Object(P.jsxs)(l.a,{mb:8,children:[Object(P.jsx)(u.a,{as:"h1",size:"lg",textAlign:"center",children:"Documentation for: @bazhe/pagination"}),Object(P.jsxs)(C.a,{textAlign:"center",fontSize:{base:"md",lg:"lg"},children:["Github:"," ",Object(P.jsx)(O.a,{href:"https://github.com/Blagoj5/pagination",color:"blue.500",children:"https://github.com/Blagoj5/pagination"})]})]}),Object(P.jsxs)(R.a,{spacing:4,children:[Object(P.jsx)(Y,{}),Object(P.jsx)(m.a,{}),Object(P.jsx)(L,{}),Object(P.jsx)(m.a,{}),Object(P.jsx)(K,{}),Object(P.jsx)(m.a,{}),Object(P.jsx)(A,{}),Object(P.jsx)(m.a,{}),Object(P.jsx)(W,{})]})]})},Z=(t(551),Object(p.a)({colors:{primary:{100:"#f7fafc",900:"#1a202c",main:"rgba(59, 130, 246, 1)"}},styles:{global:{body:{color:"black"}}}})),nn=function(){return Object(P.jsx)(c.a,{theme:Z,children:Object(P.jsx)(l.a,{minH:"100vh",bg:"gray.50",children:Object(P.jsxs)(g.a,{d:{lg:"flex",base:"block"},children:[Object(P.jsx)(z,{}),Object(P.jsx)(Q,{})]})})})},en=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,595)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),o(n),r(n)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(P.jsxs)(i.StrictMode,{children:[Object(P.jsx)(a.a,{}),Object(P.jsx)(nn,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)})),en()}},[[552,1,2]]]);
//# sourceMappingURL=main.346b0481.chunk.js.map