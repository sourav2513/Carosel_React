import React from 'react'
import './rightmenu.css'
import { CiApple } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import { RxDividerVertical } from 'react-icons/rx'
import { DiCodeigniter, DiAngularSimple, DiBingSmall, DiBackbone, DiAtom, DiCoffeescript, DiCss3, DiDigitalOcean } from "react-icons/di";
import { FcExpand } from "react-icons/fc";
const RightMenu = () => {
  const [toggle, setToggle] = React.useState(false);
  console.log(toggle);
  return (
    <>
      {
        toggle &&
        <div className='rigthmenu flex flex-col fixed top-0 right-0 bottom-0 w-16 bg-gray-700 rounded-tl-3xl rounded-bl-3xl text-justify text-slate-200'>
          <CircelBarIcon icon={<DiCodeigniter size="28" cellscale='scale-7' />} />
          <Divider CN='mb-6 mt-4' />
          <CircelBarIcon icon={<DiAngularSimple size="28" />} />
          <CircelBarIcon icon={<DiAtom size="28" />} />
          <CircelBarIcon icon={<DiBackbone size="28" />} />
          <CircelBarIcon icon={<DiBingSmall size="28" />} />
          <CircelBarIcon icon={<DiCoffeescript size="28" />} />
          <CircelBarIcon icon={<DiCss3 size="28" />} />
          <CircelBarIcon icon={<DiDigitalOcean size="28" />} />
          <CircelBarIcon icon={<FcExpand size="32" />} />
          <div className="footer-menu absolute bottom-5 right-2">
            <Divider CN='ml-1 mb-4 w-10' />
            <CircelBarIcon icon={<AiOutlinePlus size="28" />} />
          </div>
        </div>
      }
      <div className={ toggle ? 'vartical-devider bg-gray-200':'vartical-devider-off bg-gray-200'}>
        <RxDividerVertical onClick={() => setToggle(!toggle)} />
      </div>
    </>
  )
}

const CircelBarIcon = ({ icon, text = 'tooltip', cellscale = 'scale-2' }) => (
  <div className={`sidebar-icon group hover:${cellscale}`}>
    {icon}
  </div>
);
const Divider = ({ CN }) => <hr className={`sidebar-hr text-slate-950 ${CN}`} />;


export default RightMenu
