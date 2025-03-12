import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
const avatar1 = "/1.jpg";
const avatar2 = "/2.jpg";
const avatar3 = "/3.jpg";
const avatar4 = "/4.jpg";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const addNewTeamMember = () => {
    dispatch(
      showNotification({ message: "Add New Member clicked", status: 1 })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => addNewTeamMember()}
      >
        Invite New
      </button>
    </div>
  );
};

const TEAM_MEMBERS = [
  // {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@PhysioPath.com", role : "Owner", joinedOn : moment(new Date()).add(-5*1, 'days').format("DD MMM YYYY"), lastActive : "5 hr ago"},
  {
    name: "Aastha",
    avatar: avatar1,
    email: "aastha@gmail.com",
    role: "Owner",
    joinedOn: moment(new Date())
      .add(-5 * 2, "days")
      .format("DD MMM YYYY"),
    lastActive: "15 min ago",
  },
  {
    name: "Yatri",
    avatar: avatar4,
    email: "yatri@gmail.com",
    role: "Admin",
    joinedOn: moment(new Date())
      .add(-5 * 3, "days")
      .format("DD MMM YYYY"),
    lastActive: "20 hr ago",
  },
  {
    name: "Aastha",
    avatar: avatar2,

    email: "aastha@gmail.com",
    role: "Manager",
    joinedOn: moment(new Date())
      .add(-5 * 4, "days")
      .format("DD MMM YYYY"),
    lastActive: "1 hr ago",
  },
  //   {
  //     name: "Virat",
  //     avatar: "https://reqres.in/img/faces/5-image.jpg",
  //     email: "virat@PhysioPath.com",
  //     role: "Support",
  //     joinedOn: moment(new Date())
  //       .add(-5 * 5, "days")
  //       .format("DD MMM YYYY"),
  //     lastActive: "40 min ago",
  //   },
  {
    name: "Vivek",
    avatar: avatar3,
    email: "vivek@gmail.com",
    role: "Support",
    joinedOn: moment(new Date())
      .add(-5 * 7, "days")
      .format("DD MMM YYYY"),
    lastActive: "5 hr ago",
  },
];

function Team() {
  const [members, setMembers] = useState(TEAM_MEMBERS);

  const getRoleComponent = (role) => {
    if (role === "Admin")
      return <div className="badge badge-secondary">{role}</div>;
    if (role === "Manager") return <div className="badge">{role}</div>;
    if (role === "Owner")
      return <div className="badge badge-primary">{role}</div>;
    if (role === "Support")
      return <div className="badge badge-accent">{role}</div>;
    else return <div className="badge badge-ghost">{role}</div>;
  };

  return (
    <>
      <TitleCard
        title="Active Members"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Joined On</th>
                <th>Role</th>
                <th>Last Active</th>
              </tr>
            </thead>
            <tbody>
              {members.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{l.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{l.email}</td>
                    <td>{l.joinedOn}</td>
                    <td>{getRoleComponent(l.role)}</td>
                    <td>{l.lastActive}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Team;
