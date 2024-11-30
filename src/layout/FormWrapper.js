import React from 'react';
import { Outlet } from 'react-router-dom';


export default function FormWrapper() {
  return (
    <div>
      <Outlet />
    </div>
  )
}
