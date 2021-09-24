import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import AddIcon from '@material-ui/icons/Add';
import AssessmentIcon from '@material-ui/icons/Assessment';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export const SidebarDataDeveloper = [
    {
        title: "Self Assessment",
        path: "/selfAssessment",
        icon: <AssessmentIcon />,
    },
    {
        title: "Previous Assessment",
        path: "/lastselfAssessment",
        icon: <AssessmentIcon />,
    },
    {
        title: "Log Out",
        path: "/logOut",
        icon: <ExitToAppIcon />,
    }
]


export const SidebarDataLead = [
    {
        title: "Template",
        path: "/Template",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    
        subNav: [
        {
            title: "Add Template Name",
            path: "/template/addTemplate",
            icon: <AddIcon />,
        },
        {
            title: "Create Template",
            path: "/template/createTemplate",
            icon: <AddIcon />,
        },
        {
            title: "Assign Template",
            path: "/template/assignTemplate",
            icon: <IoIcons.IoIosPaper />,
        },
        {
            title: "View Template",
            path: "/template/viewTemplate",
            icon: <IoIcons.IoIosPaper />,
        },
        ],
    },
    {
        title: "Self Assessment",
        path: "/selfAssessment",
        icon: <AssessmentIcon />,
    },
    {
        title: "Previous Assessment",
        path: "/lastselfAssessment",
        icon: <AssessmentIcon />,
    },
    {
        title: "Lead Assessment",
        path: "/leadAssessment",
        icon: <AssessmentIcon />,
    },
    {
        title: "View Lead Assessment",
        path: "/lastleadAssessment",
        icon: <AssessmentIcon />,
    },
    {
        title: "Log Out",
        path: "/logOut",
        icon: <ExitToAppIcon />,
    }
]

export const SidebarData = [
{
        title: "Competency Area",
        path: "/AddCompetencyArea",
        icon: <AddIcon/>,
    },
    {
        title: "Competency Desciptors",
        path: "/AddCompetencydescriptor",
        icon: <IoIcons.IoIosPaper />,
  
    },
    {
	title: "Template",
	path: "/Template",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
    {
        title: "Add Template Name",
        path: "/template/addTemplate",
        icon: <AddIcon />,
    },
	{
		title: "Create Template",
		path: "/template/createTemplate",
		icon: <AddIcon />,
	},
    {
		title: "View Template",
		path: "/template/viewTemplate",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
    title: "Rating",
    path: "/rating",
    icon: <RateReviewIcon />,
},
{
    title: "Review Cycle",
    path: "/reviewCycle",
    icon: <AddIcon />,
},
{
    title: "Self Assessment",
    path: "/selfAssessment",
    icon: <AssessmentIcon />,
},
// {
//     title: "Lead Assessment",
//     path: "/leadAssessment",
//     icon: <AssessmentIcon />,
// },
{
    title: "Previous Assessment",
    path: "/lastselfAssessment",
    icon: <AssessmentIcon />,
},
{
    title: "Log Out",
    path: "/logOut",
    icon: <ExitToAppIcon />,
}

];
