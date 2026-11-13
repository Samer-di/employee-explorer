import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Employee = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

const Profile = async () => {
  let employee: Employee;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (!response.ok) {
      throw new Error("Failed to fetch employee");
    }

    employee = await response.json();
  } catch {
    return (
      <div className="rounded-2xl bg-white p-6">
        <h2>Employee Profile</h2>
        <p>Unable to load employee information. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-125 md:w-[33.3%] flex items-center justify-center">
      <div className="w-full max-w-[320px] min-h-107.5 rounded-[20px] bg-[#F9FBFF] p-3.5 shadow-[0_10px_30px_rgba(65,105,180,0.16)]">
        <div className="flex h-12.25 items-center gap-4 rounded-[15px] bg-linear-to-r from-[#F0F5FF] to-[#E5EDFF] px-3">
          <div className="flex h-10.25 w-10.25 shrink-0 items-center justify-center rounded-xl bg-[#C9DCFF] text-[#0755EF]">
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </div>
          <h2 className="text-[17px] font-extrabold text-[#101B50]">
            Employee Profile
          </h2>
        </div>
        <div className="mt-1.75 flex min-h-24.5 items-center gap-3.5 pl-4">
          <Image
            src={"/employee.png"}
            width={100}
            height={100}
            alt="Employee Profile Picture"
            className="rounded-full"
          />
          <div className="min-w-0">
            <h3 className="text-[17px] font-extrabold leading-tight text-[#101B50]">
              {employee.name}
            </h3>
            <p className="mt-1 text-[12px] text-[#344875]">
              Username: {employee.username}
            </p>
          </div>
        </div>
        <div className="mt-1.75 space-y-1.75">
          <div className="flex min-h-9.75 items-center gap-3 rounded-xl border border-[#DDE8FF] bg-[#F0F5FF] px-2 py-1">
            <div className="flex h-7.75 w-7.75 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-[#075DEB]">
              <FontAwesomeIcon icon={faEnvelope} className="text-m" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] leading-3 text-[#344875]">Email</p>
              <p className="break-all text-[12px] font-medium leading-4 text-black">
                {employee.email}
              </p>
            </div>
          </div>
          <div className="flex min-h-9.75 items-center gap-3 rounded-xl border border-[#DDE8FF] bg-[#F0F5FF] px-2 py-1">
            <div className="flex h-7.75 w-7.75 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-[#075DEB]">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <div>
              <p className="text-[10px] leading-3 text-[#344875]">Company</p>
              <p className="text-[12px] font-medium leading-4 text-black">
                {employee.company.name}
              </p>
            </div>
          </div>
          <div className="flex min-h-9.75 items-center gap-3 rounded-xl border border-[#DDE8FF] bg-[#F0F5FF] px-2 py-1">
            <div className="flex h-7.75 w-7.75 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-[#075DEB]">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <p className="text-[10px] leading-3 text-[#344875]">Phone</p>
              <p className="text-[12px] font-medium leading-4 text-black">
                {employee.phone}
              </p>
            </div>
          </div>
          <div className="flex min-h-9.75 items-center gap-3 rounded-xl border border-[#DDE8FF] bg-[#F0F5FF] px-2 py-1">
            <div className="flex h-7.75 w-7.75 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-[#075DEB]">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] leading-3 text-[#344875]">
                {employee.website}
              </p>
              <Link
                href={`https://${employee.website}`}
                className="text-blue-700 underline underline-offset-2"
              >
                hildegard.org
              </Link>
            </div>
            <FontAwesomeIcon
              icon={faUpRightFromSquare}
              className="pr-2 text-blue-600 text-xl"
            />
          </div>
          <div className="flex min-h-14 items-center gap-3 rounded-xl border border-[#DDE8FF] bg-[#F0F5FF] px-2 py-2">
            <div className="flex h-7.75 w-7.75 shrink-0 items-center justify-center rounded-full bg-[#DCE9FF] text-[#075DEB]">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] leading-3 text-[#344875]">Address</p>
              <p className="text-[11px] font-medium leading-3.75 text-black">
                {employee.address.city}, {employee.address.street}, <br />
                {employee.address.geo.lat}, &nbsp;{employee.address.geo.lng}
                {employee.address.suite},&nbsp; {employee.address.zipcode}
                ,&nbsp;
                {employee.address.geo.lat}, &nbsp;{employee.address.geo.lng}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
