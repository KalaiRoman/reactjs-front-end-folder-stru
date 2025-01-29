// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import { RouterData } from '../utils/routerData';
// import ProtectedRouters from '../utils/ProtectedRouters';
// import ProtectedRouterAuth from '../utils/ProtectedRouterAuth';
// function Routers() {
//   return (
//     <Routes>
//       {RouterData?.map((item, index) =>
//         item?.auth ? (
//           <>
//           <Route key={index} element={<ProtectedRouterAuth/>}>
//             <Route element={item?.element} path={item?.path} exact={item?.exact} index={item?.index} />
//           </Route>
//           </>
//         ) : (
//          <>
//           <Route key={index} element={<ProtectedRouters/>}>
//           <Route key={index} element={item?.element} path={item?.path} exact={item?.exact} index={item?.index} />
//           </Route>
//          </>
//         )
//       )}
//     </Routes>
//   );
// }
// export default Routers;



import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterData } from '../utils/routerData';
import ProtectedRouters from '../utils/ProtectedRouters';
function Routers() {
  return (
    <Routes>
      {RouterData?.map((item, index) =>
        item?.auth ? (
          <Route key={index}>
            <Route element={item?.element} path={item?.path} />
          </Route>
        ):null
      )}
{RouterData?.map((item, index) =>
        !item?.auth ? (
          <Route key={index} element={<ProtectedRouters />}>
          <Route element={item?.element} path={item?.path} exact={item?.exact} index={item?.index} />
        </Route>
        ):null
      )}


    </Routes>
  );
}

export default Routers;