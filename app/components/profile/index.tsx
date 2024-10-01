import Image from "next/image";

const Card = () => {
    return(
        <div className="justify-center items-center text-center">
            <div className="">
                <div className="h-fit w-screen m-2">
                    <Image src="Image_3854.jpg" className=" m-auto rounded-full object-contain" width="28" height="28" alt="Profile-pic" />
                </div> 
                <div className="">
                    Hey I'm Smit Ghelani
                </div>
                <div className="">
                    Software Engineer
                </div>
                <div className="">
                    {/* <i className="fa-solid fa-location-dot text-blacks-100 h-12 w-12"></i> */}
                    <div className=""> From Gujarat, India</div>
                </div>
                <div className="">
                    Machine Learning Enthusiast & DevOps Engineer <br/>
                    Focused on Building Scalable Infrastructures and Intelligent Automation
                </div>
            </div>
            <div>
                <div>
                    Contact Details
                </div>
                <div>
                    <div>Contact No: +91-6355286783</div>
                    <div>Mail ID: ghelanismit4@gmail.com</div>
                </div>
            </div>
            <div>
                <div>
                    Reachout to me on,,
                </div>
                <div>
                    <div><a href="https://www.linkedin.com/in/smitghelani/"><i className="fa-brands fa-linkedin"></i></a></div>
                    <div><a href="https://github.com/SmitGhelani"><i className="fa-brands fa-github"></i></a></div>
                    <div><a href="https://x.com/smitghelani06"><i className="fa-brands fa-x-twitter"></i></a></div>
                    {/* <div><a href="https://leetcode.com/u/SmitGhelani/"><Image src="leetcode.svg" className="h-6 w-6 items-center justify-center text-center"/></a></div> */}
                </div>
            </div>
            <div className="">
                <div className="">Skills</div>
                <div className="flex">
                <Image src="nodejs.svg" className="h-20 w-20" alt="" />
                <Image src="aws.svg" className="h-20 w-20" alt=""/>
                <Image src="bash.svg" className="h-20 w-20" alt=""/>
                <Image src="ansible.svg" className="h-20 w-20" alt=""/>
                <Image src="css.svg" className="h-20 w-20" alt=""/>
                <Image src="docker.svg" className="h-20 w-20" alt=""/>
                <Image src="devops.svg" className="h-20 w-20" alt=""/>
                <Image src="express.svg" className="h-20 w-20" alt=""/>
                <Image src="gatsby.svg" className="h-20 w-20" alt=""/>
                <Image src="drupal.svg" className="h-20 w-20" alt=""/>
                <Image src="git.svg" className="h-20 w-20" alt=""/>
                <Image src="github.svg" className="h-20 w-20" alt=""/>
                <Image src="html.svg" className="h-20 w-20" alt=""/>
                <Image src="javascript.svg" className="h-20 w-20" alt=""/>
                <Image src="jenkins.svg" className="h-20 w-20" alt=""/>
                <Image src="linux.svg" className="h-20 w-20" alt=""/>
                <Image src="ML.svg" className="h-20 w-20" alt=""/>
                <Image src="mongo.svg" className="h-20 w-20" alt=""/>
                <Image src="mysql.svg" className="h-20 w-20" alt=""/>
                <Image src="next.svg" className="h-20 w-20" alt=""/>
                <Image src="php.svg" className="h-20 w-20" alt=""/>
                <Image src="python.svg" className="h-20 w-20" alt=""/>
                <Image src="react.svg" className="h-20 w-20" alt=""/>
                <Image src="tailwind.svg" className="h-20 w-20" alt=""/>
                <Image src="typescript.svg" className="h-20 w-20" alt=""/>
                <Image src="leetcode.svg" className="h-20 w-20" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Card;