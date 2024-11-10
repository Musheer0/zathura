import clsx from "clsx"
import { BsDiscord, BsGithub } from "react-icons/bs"
import { FaXTwitter } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const Links = (
    {
        className,
        side='bottom'
    }:
    {
        className?:string,
        side?: 'top'| 'bottom'
    }
) => {
  return (
    <div className={clsx(
        "links   flex  justify-between  items-center gap-5   bg-gradient-to-t  p-1 from-zinc-50  to-zinc-100  rounded-full border border-zinc-200",
        className,
        !className && 'sm:flex hidden'
    )}
      style={{
        boxShadow: '-4px 15px 20px rgb(0,0,0,.05)'
       }}
       >
      <NavLink to={'/'} className={({isActive})=>isActive ? `hover:bg-zinc-200 text-zinc-50 p-2 bg-gradient-to-t from-zinc-900  to-zinc-700 rounded-full px-5`: 'hover:bg-zinc-200 p-2 rounded-full px-5'}>
      <p className='font-semibold   '>Home</p>

      </NavLink>
      <NavLink to={'/about'}  className={({isActive})=>isActive ? `hover:bg-zinc-200 text-zinc-50 p-2 bg-gradient-to-t from-zinc-900  to-zinc-700 rounded-full px-5`: 'hover:bg-zinc-200 p-2 rounded-full px-5'}>
      <p className='font-semibold  hover:underline '>About</p>

      </NavLink>        
     <div className="hover:bg-zinc-200 group text-zinc-900 hover:text-zinc-50  p-2 hover:bg-gradient-to-t from-zinc-900  to-zinc-700 rounded-full px-5">
     <p className='font-semibold    hover:underline cursor-pointer '>
            Socials
            <div className={clsx(
                " hidden group-hover:flex opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex-col gap-2 p-2 absolute overflow-hidden bg-zinc-50 border   rounded-xl",
                side==='bottom' ? ' w-[200px] ' : 'bottom-1/2'
            )}>
             <a href="https://discord.com/invite/dyMuwaZfPf" className="flex p-2  w-full text-zinc-950 items-center gap-2 py-2 border-b">
             <BsDiscord/>
             Discord 
             </a>
             <a href="https://github.com/ZathuraDbg/ZathuraDbg"
 className="flex p-2  text-zinc-950 w-full items-center gap-2 py-2 border-b"      >
      <BsGithub/> Github
      </a>
      <a href="https://x.com/ZathuraDbg"
 className="flex p-2  text-zinc-950 w-full items-center gap-2 py-2 "      >
  <FaXTwitter /> X
      </a>

            </div>
            </p>
     </div>
      </div>
  )
}

export default Links