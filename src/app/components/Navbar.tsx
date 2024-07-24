import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading , SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">

{/* left */}
<div className="md:hidden lg:block w-[20%]">
    <Link className="font-bold text-xl text-purple-600" href="/">
    DOMX
    </Link>
</div>

{/* center */}
<div className="hidden md:flex w-[50%] justify-between items-center">
    <div className="flex gap-6 text-gray-600">
        <Link href="/" className="flex items-center justify-center gap-2"> 
        <Image src="/home.png" alt="home" width={16} height={16} className="h-4 w-4"   />
        <span>
            HomePage
        </span>
         </Link>
        <Link href="/" className="flex items-center justify-center gap-2"> 
        <Image src="/friends.png" alt="friends" width={16} height={16} className="h-4 w-4"  />
        <span>
            Friends
        </span>
         </Link>
        <Link href="/" className="flex items-center justify-center gap-2"> 
        <Image src="/stories.png" alt="storeis" width={16} height={16} className="h-4 w-4"  />
        <span>
            Stories
        </span>
         </Link>
         </div>

         <div className="hidden xl:flex  bg-slate-200 items-center rounded-xl px-2">
            <input className="bg-transparent outline-none" type="text" name="" placeholder="search" id="" />
            <Image src="/search.png" alt="search" height={15} width={15} />

    </div>

</div>

{/* right */}
<div className="w-[30%] flex items-center gap-4 justify-end">
    <MobileMenu/>
    <ClerkLoading>
        <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
    </ClerkLoading>
    <ClerkLoaded>
        <SignedIn>
            <div className="cursor-Pointer">
                <Image src="/people.png" alt="people" height={20} width={20} />
            </div>
            <div className="cursor-Pointer">
                <Image src="/messages.png" alt="people" height={20} width={20} />
            </div>
            <div className="cursor-Pointer">
                <Image src="/notifications.png" alt="people" height={20} width={20} />
            </div>
            <UserButton/>
        </SignedIn>
        <SignedOut>
            <div className="flex items-center gap-2 justify-center text-sm">
                <Image src="/login.png" alt="loginimage" width={20} height={20} />
                <Link href="/sign-in">
                Login/SignUp
                </Link>
            </div>
        </SignedOut>
    </ClerkLoaded>
</div>
    </div>
  )
}

export default Navbar