import React, { useState, useEffect, useCallback } from "react";
import {
  faFileInvoice,
  faMoneyBillWave,
  faTshirt,
  faUser,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import DashboardTotalCount from "./DashboardTotalCount";
import DashboardTopFive from "./DashboardTopFive";
// import requestAPI from "../../../../apis";
import { CircularProgress } from "@mui/material";

export default function DashboardMain() {
  const [totalApplicants, setTotalApplicants] = useState(null);
  const [totalJobs, setTotalJobs] = useState(null);
  const [totalHotJobs, setTotalHotJobs] = useState(null);
  const [totalNewJobs, setTotalNewJobs] = useState(null);
  const [topAppliedCompany, setTopAppliedCompany] = useState(null);
  const [topAppliedJob, setTopAppliedJob] = useState(null);

  // useEffect(() => {
  //   Promise.all([
  //     requestAPI("/survey/applicant/month", "GET").then((res) => res),
  //     requestAPI("/survey/job/month", "GET").then((res) => res),
  //     requestAPI("/jobs", "GET").then((res) => res),
  //     requestAPI("/jobs", "GET").then((res) => res),
  //     requestAPI("/survey/company/most/candidate", "GET").then((res) => res),
  //     requestAPI("/survey/job/most/candidate", "GET").then((res) => res),
  //   ])
  //     .then((data) => {
  //       setTotalApplicants(data[0].data.total);
  //       setTotalJobs(data[1].data.total);
  //       setTotalHotJobs(data[2].data.total);
  //       setTotalNewJobs(data[3].data.total);

  //       setTopAppliedCompany(data[4].data);

  //       setTopAppliedJob(data[5].data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  const totalCount = [
    {
      id: 1,
      title: "Việc làm mới",
      count: totalNewJobs ? totalNewJobs : <CircularProgress />,
      percent: 30,
      isDecrease: false,
      color: "darkpurple",
      icon: faFileInvoice,
    },
    {
      id: 2,
      title: "Việc làm hấp dẫn",
      count: totalHotJobs ? totalHotJobs : <CircularProgress />,
      percent: 10,
      isDecrease: true,
      color: "darkred",
      icon: faShoppingBag,
    },
    {
      id: 3,
      title: "Tổng việc làm",
      count: totalJobs ? totalJobs : <CircularProgress />,
      percent: 20,
      isDecrease: false,
      color: "darkblue",
      icon: faMoneyBillWave,
    },
    {
      id: 4,
      title: "Tổng ứng viên",
      count: totalApplicants ? totalApplicants : <CircularProgress />,
      percent: 19,
      isDecrease: true,
      color: "lightblue",
      icon: faUser,
    },
  ];

  return (
    <div className="dashboard-main">
      <div className="row flex">
        {totalCount.map((item, index) => {
          return <DashboardTotalCount key={index} item={item} />;
        })}
      </div>

      <div className="row flex">
        <DashboardTopFive
          icon={faUser}
          title="TOP công ty ứng tuyển"
          color="lightblue"
          data={topAppliedCompany}
          table={[
            {
              title: "Tên công ty",
            },
            {
              title: "Tổng ứng viên",
            },
          ]}
        />
        <DashboardTopFive
          icon={faTshirt}
          title="TOP việc làm ứng tuyển"
          color="pink"
          data={topAppliedJob}
          table={[
            {
              title: "Tên việc làm",
            },
            {
              title: "Tổng ứng viên",
            },
          ]}
        />
      </div>
    </div>
  );
}
