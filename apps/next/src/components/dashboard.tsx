import { graphql, useLazyLoadQuery } from "react-relay";
import DashboardHeader from "./DashboardHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileForm from "./profile/ProfileForm";
import { dashboardQuery } from "../__generated__/dashboardQuery.graphql";


export default function Dashboard() {
  
//   const response = useLazyLoadQuery<dashboardQuery>(
//     graphql`
//         query dashboardQuery {
//             profile {
//                 ...ProfileInfo_profile
//             }
//         }
//     `,
//     {},
//     {
//         fetchPolicy: 'network-only',
//     },
// );
//   const { profile } = response;

  return (
    //  <div className="h-screen bg-gray-100">
    //     {/* <DashboardHeader hasArrow/>
    //     <div className="flex items-center mt-8 justify-center">
    //         <ProfileInfo profile={profile!} />
        
    //     {/* <ProfileForm/> */}
    //     </div> */}
    //  </div>
    <h1>ola</h1>
  )
}