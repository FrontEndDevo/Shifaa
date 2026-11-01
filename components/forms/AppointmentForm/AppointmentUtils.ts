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
