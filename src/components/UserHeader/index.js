// // components/UserHeader.js
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import styles from "./styles";
// import HamburgerPanel from "../HamburgerPanel";

// const tabs = ["General", "Network", "ISP"];
// const { width } = Dimensions.get("window");

// const UserHeader = ({
//   user,
//   onBack,
//   activeTab,
//   onTabChange,
//   onEdit,
//   isEditing,
// }) => {
//   const [menuVisible, setMenuVisible] = useState(false);

//   return (
//     <>
//       {/* HEADER */}
//       <View
//         style={{
//           position: "absolute",
//           top: 0,
//           width,
//           zIndex: 1000,
//           backgroundColor: "#F3F3F3",
//         }}
//       >
//         <View style={styles.headerWrapper}>
//           {/* BACK BUTTON */}
//           <TouchableOpacity style={styles.backButton} onPress={onBack}>
//             <Ionicons name="arrow-back" size={24} color="#000" />
//           </TouchableOpacity>

//           {/* PROFILE CARD */}
//           <View style={styles.profileCard}>
//             <TouchableOpacity onPress={onEdit} style={styles.editIcon}>
//               <Ionicons
//                 name={isEditing ? "save" : "create-outline"}
//                 size={24}
//                 color="#000"
//               />
//             </TouchableOpacity>

//             <Text style={styles.profileName}>
//               {user?.full_name || "N/A"}
//             </Text>

//             <Text style={styles.profilePhone}>
//               Ph: {user?.phone || "N/A"}
//             </Text>

//             <View style={styles.updatedWrapper}>
//               <Text style={styles.updatedLabel}>Last Updated</Text>
//               <Text style={styles.updatedDate}>
//                 {user?.last_updated?.split("T")[0] || "N/A"}
//               </Text>
//             </View>
//           </View>

//           {/* TABS */}
//           <View style={styles.tabsContainer}>
//             {tabs.map((tab) => {
//               const isActive = activeTab === tab;
//               return (
//                 <TouchableOpacity
//                   key={tab}
//                   style={isActive ? styles.activeTab : styles.inactiveTab}
//                   onPress={() => onTabChange(tab)}
//                 >
//                   <Text
//                     style={
//                       isActive
//                         ? styles.activeTabText
//                         : styles.inactiveTabText
//                     }
//                   >
//                     {tab}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </View>
//       </View>

//       {/* SAME HAMBURGER PANEL */}
//       <HamburgerPanel
//         visible={menuVisible}
//         onClose={() => setMenuVisible(false)}
//       />
//     </>
//   );
// };

// export default UserHeader;
// components/UserHeader.js
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import HamburgerPanel from "../HamburgerPanel";

const tabs = ["General", "Network", "ISP"];
const { width } = Dimensions.get("window");

const UserHeader = ({
  user,
  onBack,
  activeTab,
  onTabChange,
  onEdit,
  isEditing,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      {/* HEADER */}
      <View
        style={{
          position: "absolute",
          top: 0,
          width,
          zIndex: 1000,
          backgroundColor: "#F3F3F3",
        }}
      >
        <View style={styles.headerWrapper}>
          {/* BACK BUTTON */}
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>

          {/* PROFILE CARD */}
          <View style={styles.profileCard}>
            <TouchableOpacity onPress={onEdit} style={styles.editIcon}>
              <Ionicons
                name={isEditing ? "save" : "create-outline"}
                size={24}
                color="#000"
              />
            </TouchableOpacity>

            <Text style={styles.profileName}>
              {user?.full_name || "N/A"}
            </Text>

            <Text style={styles.profilePhone}>
              Ph: {user?.phone || "N/A"}
            </Text>

            <View style={styles.updatedWrapper}>
              <Text style={styles.updatedLabel}>Last Updated</Text>
              <Text style={styles.updatedDate}>
                {user?.last_updated?.split("T")[0] || "N/A"}
              </Text>
            </View>
          </View>

          {/* TABS */}
          <View style={styles.tabsContainer}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <TouchableOpacity
                  key={tab}
                  style={isActive ? styles.activeTab : styles.inactiveTab}
                  onPress={() => onTabChange(tab)}
                >
                  <Text
                    style={
                      isActive
                        ? styles.activeTabText
                        : styles.inactiveTabText
                    }
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      {/* HAMBURGER PANEL */}
      <HamburgerPanel
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </>
  );
};

export default UserHeader;