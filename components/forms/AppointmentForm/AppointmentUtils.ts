export function StatusType(type: string) {
  let status;
  switch (type) {
    case "create":
      status = "pending";
      break;
    case "schedule":
      status = "scheduled";
      break;
    case "cancel":
      status = "cancelled";
      break;
  }

  return status;
}
export function ButtonLabel(type: string) {
  let buttonLabel;
  switch (type) {
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "delete":
      buttonLabel = "Delete Appointment forever";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      buttonLabel = "Submit Apppointment";
  }

  return buttonLabel;
}
