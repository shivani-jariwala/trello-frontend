import React, { useEffect, useState } from "react";
import * as style from "./Styles";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
// import { getUserFromEmail } from "../../../Services/userService";
// import ChipComponent from "./ChipComponent";

const TitleCardComponent = (props) => {
  const dispatch = useDispatch();
  const { updateback, link } = props;
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    updateback({
      title: title,
      backgroundImageLink: link,
      members: members,
    });
  }, [updateback, title, members, link]);

  return (
    <style.TitleCard>
      <style.Panel link={props.link}>
        <style.PanelWrapper>
          <style.TitleInput
            placeholder="Add board title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <style.MemberWrapper>
            <style.MemberInputWrapper>
              <style.MemberInput
                placeholder="Small description of the project"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </style.MemberInputWrapper>
          </style.MemberWrapper>
          <style.CloseButton>
            <CloseOutlinedIcon
              fontSize="1rem"
              onClick={() => props.callback()}
            />
          </style.CloseButton>
        </style.PanelWrapper>
      </style.Panel>
    </style.TitleCard>
  );
};

export default TitleCardComponent;
