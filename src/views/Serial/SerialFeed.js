import React from 'react'
import { MDBDataTable } from 'mdbreact';
import { printDateTime } from './../../helpers/datetime';

const columns = [
      {
        label: '#',
        field: 'dt',
        sort: 'desc',
        width: 50
    },
    {
        label: 'Message',
        field: 'msg',
        width: 300
    },
    {
        label: 'Type',
        field: 'sType',
        width: 50
    },
    
]

function statusIcon(type)
{
  switch(type)
  {
    case "log":
      return (<span className="mdi mdi-arrow-right-drop-circle text-success"></span>);
    case "warn":
      return (<span className="mdi mdi-arrow-right-drop-circle text-warning"></span>);
    case "error":
      return (<span className="mdi mdi-arrow-right-drop-circle text-danger"></span>);
    case "event":
      return (<span className="mdi mdi-arrow-right-drop-circle text-info"></span>);
    case "unhandled":
      return (<span className="mdi mdi-arrow-right-drop-circle text-secondary"></span>);
    default:
      return '----';
  }
}

function SerialFeed(props) {
  let data = [];

  if(props.showraw)
  {
    data = props.rawlogs.map(e=>({msg:e.message,dt:printDateTime(e.time),sType:"----"}));
  }
  else
  {
    data = props.data.map(e=>{
      if(e.type === props.filter || props.filter === "all")
      {
        return {msg:e.message,dt:printDateTime(e.time),sType:statusIcon(e.type)}
      }
      else
      {
        return null;
      }
    })
  }

  const TableData = {
    columns: columns,
    rows: data
  };
  
  return (
    <div className="p-2">
      <MDBDataTable data={TableData} />
    </div>  
  )
}

export default SerialFeed;




