export const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "#2196F3";
    case "Resolved":
      return "#4CAF50";
    case "In Progress":
      return "#FF9800";
    case "Closed":
      return "#9E9E9E";
    default:
      return "#666";
  }
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "#F44336";
    case "Medium":
      return "#FF9800";
    default:
      return "#4CAF50";
  }
};