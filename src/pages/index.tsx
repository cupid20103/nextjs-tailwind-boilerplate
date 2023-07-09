import type { NextPage, InferGetStaticPropsType, GetStaticProps } from "next";

type HomePropsType = {
	name: string;
	age: number;
};

export const getStaticProps: GetStaticProps<{
	personalData: HomePropsType;
}> = async () => {
	const res = await fetch("http://localhost:3000/api/hello");
	const personalData = await res.json();
	return { props: { personalData } };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
	personalData,
}) => {
	return (
		<>
			Hello, I am {personalData.name} and {personalData.age} years old.
		</>
	);
};

export default Home;
