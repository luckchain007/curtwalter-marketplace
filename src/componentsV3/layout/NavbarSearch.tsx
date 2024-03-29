import Search from "../search/Search";
import classNames from "classnames";
// import {useStore} from "../../lib/store";

export function NavbarSearch() {
  // const {
  //   headerSearchOnMobileShow
  // } = useStore()

  return (
    <div className='h-full w-full flex items-center justify-center px-8'>
      <div className='navbar-search w-full max-w-lg'>
        <Search key={1}/>
        {/* { headerSearchOnMobileShow && <Search key={1}/> } */}
        {/* { !headerSearchOnMobileShow && <Search key={2}/> } */}
      </div>
    </div>
  )
}