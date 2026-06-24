import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights, stats } from "@/data";
import Image from "next/image";

export default function About() {
    return (
        <div className="py-16 bg-gray-100 dark:bg-gray-900">

            {/* section heading */}
            <SectionHeading title_1="About" title_2="Me" description="Get to know the developer behind the code" />

            <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
                {/*Image*/}
                <div
                    data-aos="fade-right"
                    data-aos-delay="0"
                    data-aos-anchor-placement="top-center"
                    className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden p-2">
                        <Image src={'/images/codigo.png'} alt={'profile'}
                            width={700}
                            height={700}
                            className="object-cover w-full h-full rounded-xl" />
                    </div>
                </div>

                {/*Content*/}
                <div
                    data-aos="fade-left"
                    data-aos-delay="150"
                    data-aos-anchor-placement="top-center"
                    className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        A passionate developer who loves to create
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                    I am a Software Engineering student at Universidad Siglo 21 with a strong focus on building efficient and maintainable applications. With hands-on experience developing AI agents and production web apps at a startup, I work across the full stack, from React and Next.js interfaces to backend integrations and APIs.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                    Being in the 4th year of my degree has provided me with a deep understanding of software quality, agile methodologies, and system architecture. I combine this academic background with real-world production experience and a certified B2 English level, ready to contribute to global teams and high-impact projects.
                    </p>
                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {highlights.map((item) => {
                            return <div key={item.text} className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                    <item.icon className="w-4 h-4 text-blue-500" />
                                </div>
                                <span className="text-muted-foreground" translate="no">{item.text}</span>
                            </div>
                        })}
                    </div>
                </div>

                {/* stats */}
                <div className="mt-16 w-[100%] mx-auto lg:col-span-2">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat) => {
                            return <div
                                data-aos="zoom-in"
                                data-aos-delay="300"
                                data-aos-anchor-placement="top-center"
                                key={stat.label}
                                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center">
                                <div translate="no" className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                                    {stat.value}
                                </div>
                                <div translate="no" className="text-sm text-muted-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}