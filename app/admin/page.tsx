// Data Table:
import { DataTable } from "@/components/admin/DataTable";
import { columns } from "@/components/admin/columns";

// Components:
import StatAppointment from "@/components/admin/StatAppointment";

// Shifaa Layout:
import Shifaa from "@/components/layout/Shifaa";

// API actions:
import { getRecentAppointments } from "@/lib/actions/appointment.actions";

const Admin = async () => {
  const appointments = await getRecentAppointments();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Shifaa />

        <p className="text-xl font-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatAppointment
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatAppointment
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatAppointment
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.rows} />
      </main>
    </div>
  );
};

export default Admin;
