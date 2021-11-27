import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardMain from "./Main/DashboardMain";
import classNames from "classnames";
import DashboardNews from "./News/DashboardNews";
import DashboardNewsCreate from "./News/DashboardNewsCreate";
import DashboardNewsEdit from "./News/DashboardNewsEdit";

export default function DashboardBody(props) {
  const tabId = props.tabId;
  const [toast, setToast] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const [news] = useState({});
  const [order] = useState({});
  const [company] = useState({});
  const [users] = useState({});
  const [candidate] = useState({});
  const [recruiters] = useState({});
  const [coreValues] = useState({});
  const setToastFunc = () => {
    setIsChange(true);
    setTimeout(() => {
      setIsChange(false);
    }, 100);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  const openMenuMobile = props.openMenuMobile

  return (
    <div
      className={classNames("DashboardBody ", {
        DashboardBody_small: !props.openMenu,
      })}
    >
      {!openMenuMobile && (
        <div
          className="DashboardBody-closemenu"
          onClick={props.setOpenMenuOnClick}
        ></div>
      )}

      {props.openCreate && tabId === "3" && (
        <DashboardNewsCreate
          setCloseCreateFunc={props.setCloseCreateFunc}
          setToastFunc={setToastFunc}
        />
      )}
      {props.openEdit && tabId === "3" && (
        <DashboardNewsEdit
          setCloseEditFunc={props.setCloseEditFunc}
          setToastFunc={setToastFunc}
          order={order}
        />
      )}


      <DashboardHeader
        itemName={props.menuItems[tabId - 1].name}
        setOpenMenuOnClick={props.setOpenMenuOnClick}
        openMenu={props.openMenu}
        orderNotice={props.orderNotice}
      />
      {tabId === "1" && <DashboardMain />}
      {/* {tabId === "2" && (
        <DashboardTranslation
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )} */}
      {tabId === "3" && (
        <DashboardNews
          setOpenCreateFunc={props.setOpenCreateFunc}
          setOpenEditFunc={props.setOpenEditFunc}
          toast={toast}
          isChange={isChange}
        />
      )}

    </div>
  );
}
