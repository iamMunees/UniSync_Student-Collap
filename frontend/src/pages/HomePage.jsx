import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../lib/axios";
import Sidebar from "../components/Sidebar";
import PostCreation from "../components/PostCreation";
import Post from "../components/Post";
import { Users } from "lucide-react";
import RecommendedUser from "../components/RecommendedUser";
import { IoSearchSharp } from "react-icons/io5";
import { useState, useEffect } from "react";

const HomePage = () => {
	const { data: authUser } = useQuery({ queryKey: ["authUser"] });

	const [searchText, setSearchText] = useState("");
	const [recommendedUsers, setRecommendedUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);
				setError(null);

				const url = searchText !== "" ? `/users/search/${searchText}` : "/users/suggestions";
				const res = await axiosInstance.get(url);
				setRecommendedUsers(res.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, [searchText]);

	const { data: posts } = useQuery({
		queryKey: ["posts"],
		queryFn: async () => {
			const res = await axiosInstance.get("/posts");
			return res.data;
		},
	});

	console.log("posts", posts);

	return (
		<div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
			<div className='hidden lg:block lg:col-span-1'>
				<Sidebar user={authUser} />
			</div>

			<div className='col-span-1 lg:col-span-2 order-first lg:order-none'>
				<PostCreation user={authUser} />

				{posts?.map((post) => (
					<Post key={post._id} post={post} />
				))}

				{posts?.length === 0 && (
					<div className='bg-white rounded-lg shadow p-8 text-center'>
						<div className='mb-6'>
							<Users size={64} className='mx-auto text-blue-500' />
						</div>
						<h2 className='text-2xl font-bold mb-4 text-gray-800'>No Posts Yet</h2>
						<p className='text-gray-600 mb-6'>Connect with others to start seeing posts in your feed!</p>
					</div>
				)}
			</div>

			{recommendedUsers?.length > 0 && (
				<div className='col-span-1 lg:col-span-1 hidden lg:block'>
					<div className='bg-secondary rounded-lg shadow p-4'>
						<h2 className='font-semibold mb-4'>People you may know</h2>
						<div className="flex flex-col sm:flex-row gap-2 mb-4">
							<input
								className="flex-1 bg-transparent w-20 text-center placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md  py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
								placeholder="Search User..."
								onChange={(e) => {
									setSearchText(e.target.value);
								}}
							/>
						</div>
						{
							loading ?
								<p>Loading...</p>
								: (
									<div className="h-[350px] overflow-auto">
										{recommendedUsers?.map((user) => (
											<RecommendedUser key={user._id} user={user} />
										))}
									</div>
								)

						}
						{error && <p>Error: {error.message}</p>}


					</div>
				</div>
			)}
		</div>
	);
};
export default HomePage;
