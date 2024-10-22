import RegisterForm from "@/components/forms/regitser-form";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
	const user = await getUser(userId);
	return (
		<div className="flex h-screen max-h-screen">
			{/* TODO: OTP Verification | PasskeyModal */}
			<section className="remove-scrollbar container my-auto">
				<div className="sub-container max-w-[496px]">
					<Image
						src="/assets/icons/logo-full.svg"
						width={100}
						height={100}
						className="h-10 w-fit mb-12"
						alt="patient"
					/>
					<RegisterForm user={user} />
					<div className="text-14-regular mt-20 flex justify-between">
						<p className="justify-items-end text-dark-600 xl:text-left">
							&copy; 2024 CarePlus
						</p>
						<Link
							href="/?admin=true"
							className="text-green-500"
						>
							Admin
						</Link>
					</div>
				</div>
			</section>
			<Image
				src="/assets/images/register-img.png"
				height={1000}
				width={1000}
				alt="patient"
				className="side-img max-w-[50%]"
			/>
		</div>
	);
};

export default Register;
