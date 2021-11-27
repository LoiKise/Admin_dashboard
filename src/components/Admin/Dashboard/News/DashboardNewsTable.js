import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DataGrid } from "@mui/x-data-grid";
import CustomPagination from "../Utils/CustomPagination";
import CustomNoRowsOverlay from "../Utils/CustomNoRowsOverlay";
import CustomToolbar from "../Utils/DashboardConfigToolBar";
import { useSnackbar } from "notistack";
import DashboardControl from "../Utils/DashboardControl";
import CustomLoadingOverlay from "../Utils/CustomLoadingOverlay";
import DashboardDialogConfirm from "../Utils/DashboardDialogConfirm";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { CheckUpdate } from "../../../../data/dashboard/news/newSlice";
import { useDispatch } from "react-redux";
// import requestAPI from "../../../../apis";

export default function DashboardTable(props) {
  const [news, setNews] = useState([]);
  const [constNews, setConstNews] = useState([]);
  const [selection, setSelection] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const update = useSelector((state) => state.news.isUpdate);
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setIsLoading(true);
  //   requestAPI("/jobs", "GET")
  //     .then((res) => {
  //       setNews(res.data.data);
  //       setConstNews(res.data.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         if (err.response.status === 403 || err.response.status === 401) {
  //           history.push("/dashboard");
  //           enqueueSnackbar(
  //             "Đã phát hiện lỗi truy cập, vui lòng đăng nhập lại",
  //             {
  //               persist: false,
  //               variant: "error",
  //               preventDuplicate: true,
  //               autoHideDuration: 3000,
  //             }
  //           );
  //         }
  //       }
  //     });
  // }, [update]);

  const deleteOnClick = () => {
    // if (selection.length > 0) {
    //   RemoveOrder({ idList: selection })
    //     .then((res) => {
    //       if (res) {
    //         dispatch(CheckUpdate());
    //         enqueueSnackbar("Xóa hóa đơn thành công", {
    //           persist: false,
    //           variant: "success",
    //           preventDuplicate: true,
    //           autoHideDuration: 3000,
    //         });
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // } else {
    //   enqueueSnackbar("Vui lòng chọn hóa đơn muốn xóa", {
    //     persist: false,
    //     variant: "error",
    //     preventDuplicate: true,
    //     autoHideDuration: 3000,
    //   });
    // }
  };
  // const RemoveOrder = async (list) => {
  //   const data = await requestAPI(`/job/delete`, "DELETE", list);
  //   return data;
  // };
  const searchOnSubmit = (event) => {
    event.preventDefault();
  };
  const searchOnChange = (event) => {
    const searchInput = event.target.value.trim();
    const search = [];
    if (searchInput.trim() !== "") {
      for (let i in constNews) {
        if (constNews[i].name_vi.includes(searchInput)) {
          search.push(constNews[i]);
        }
      }
      setNews(search);
    } else {
      setNews(constNews);
    }
  };
  const handleOpenDialogDelete = () => {
    setOpen(true);
  };
  const handleCloseDialogDelete = () => {
    setOpen(false);
  };
  return (
    <div className="topfive flex-col" style={{ width: "100%" }}>
      <div className={`headerbox flex-center ${props.color}`}>
        <FontAwesomeIcon icon={props.icon} className="icon" />
      </div>
      <div className="top-location-container">
        <div className="headerbox-header">
          <p>{props.title}</p>
        </div>
        <div className="topfive-content flex-col">
          <DashboardControl
            addController={props.setOpenCreateFunc}
            deleteController={deleteOnClick}
            searchOnChange={searchOnChange}
            searchController={searchOnSubmit}
            handleOpenDialogDelete={handleOpenDialogDelete}
            placeholderSearch={"Tìm kiếm theo tên bài viết"}
          />
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              components={{
                Toolbar: CustomToolbar,
                Pagination: CustomPagination,
                NoRowsOverlay: CustomNoRowsOverlay,
                LoadingOverlay: CustomLoadingOverlay,
              }}
              loading={isLoading}
              columns={props.table}
              rows={news}
              pagination
              pageSize={5}
              rowsPerPageOptions={[5]}
              onSelectionModelChange={(newSelectionModel) => {
                setSelection(newSelectionModel);
              }}
              checkboxSelection
            />
          </div>
          <DashboardDialogConfirm
            open={open}
            handleCloseDialogDelete={handleCloseDialogDelete}
            handleDelete={deleteOnClick}
          />
        </div>
      </div>
    </div>
  );
}
