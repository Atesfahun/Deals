import Logo from "./components/Logo"
import SideBar from "./components/SideBar"

const Calander = () => {
  return (
    <div className="flex-col">
        <nav className="flex bg-white justify-between items-center p-3">
            <div className=" ">
            <Logo />
            </div>
            <div className="flex w-full h-full p-5">
                <h1 className="!text-secondary text-3xl font-bold"><strong>Calander</strong></h1>
            </div>
            <div className="flex items-center justify-between gap-4">

                <div className="flex w-6 h-6">
                    <button>
                        <img src="search.svg" alt="" />
                    </button>
                </div>
                <div className="w-10 h-10">
                    <button>
                        <img src="user.png" className="rounded-full"  alt="" />
                    </button>
                </div>
            </div>
        </nav>
        <div className="flex">
            <SideBar />
            <div className="flex-col">
                <h2 className="pl-6 text-gray-600">Here are the list of the projects you have been working on</h2>
                <div className="flex-col p-4">
                    <div className="flex justify-between">
                        <div className="flex w-2/3 items-center gap-3">
                            <h1 className="text-secondary text-2xl font-bold">February 2021</h1>
                            <select name="" id="">
                            <img src="scroll.svg" alt="" />
                            </select>
                        </div>
                        <div className="flex gap-2 text-white bg-primary rounded-xl justify-center items-center p-3">
                            <h2>Create</h2>
                            <img src="add.svg" alt="" />
                        </div>
                    </div>
                        <div className=" text-secondary pt-6">
                            <table className="w-full">
                                <tr className="text-secondary font-bold flex justify-between p-3 items-start">
                                    <td>Mon</td>
                                    <td>Tue</td>
                                    <td>Wed</td>
                                    <td>Thu</td>
                                    <td>Fri</td>
                                    <td>Sat</td>
                                    <td>Sun</td>
                                </tr>
                                <tr className="text-secondary font-semibold flex justify-between p-3 items-start">
                                    <div className=""><td>1</td></div>
                                    <div><td>2</td></div>
                                    <div><td>3</td></div>
                                    <div><td>1</td></div>
                                    <div><td>12</td></div>
                                    <div><td>1</td></div>
                                    <div><td>1</td></div>
                                </tr>
                                <tr className="text-secondary font-semibold flex justify-between p-3 items-start">
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                </tr>
                                <tr className="text-secondary font-semibold flex justify-between p-3 items-start">
                                    <td>15</td>
                                    <td>16</td>
                                    <td className="">17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                </tr>
                                <tr className="text-secondary font-semibold flex justify-between p-3 items-start">
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                </tr>
                                <tr className="text-secondary font-semibold flex justify-between p-3 items-start">
                                    <td>29</td>
                                    <td>30</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                </tr>
                            </table>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex gap-3">
                                <div className="w-6 h-6 flex bg-green-600 rounded-full p-2"></div>
                                <div>Event Dates</div>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-6 h-6 flex bg-blue-600 rounded-full p-2"></div>
                                <div>Selected Date</div>
                            </div>
                        </div>
                    </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Calander