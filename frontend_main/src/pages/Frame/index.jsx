import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading } from "../../components";

export default function FramePage() {
  return (
    <>
      <Helmet>
        <title>Shadik's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-yellow-100">
        <div className="flex md:flex-col items-center">
          <div className="h-[720px] w-[19%] md:w-full md:p-5 bg-deep-orange-50 relative">
            <Img
              src="images/img_frame_64x208.png"
              alt="image"
              className="h-[64px] w-[85%] right-[14.00px] top-[2.00px] m-auto object-cover absolute"
            />
            <div className="flex flex-col items-start w-[87%] gap-[134px] top-[22.37px] right-0 left-0 m-auto md:gap-[100px] sm:gap-[67px] absolute">
              <Heading size="xl" as="h1" className="!text-red-A200">
                EcoSync
              </Heading>
              <div className="flex flex-col self-stretch items-start ml-1 gap-[31px] md:ml-0">
                <div className="flex items-center gap-3">
                  <Img src="images/img_frame_red_a200.svg" alt="image_one" className="h-[16px] w-[16px]" />
                  <div className="flex">
                    <Text as="p" className="self-start !text-black-900 !font-medium">
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Img src="images/img_frame_gray_700.svg" alt="image_two" className="self-end h-[16px] w-[16px]" />
                  <Text as="p" className="!text-gray-700">
                    Profile
                  </Text>
                </div>
                <div className="flex items-center gap-1">
                  <Img src="images/img_group_fill.svg" alt="image_three" className="h-[24px] w-[24px]" />
                  <Text as="p" className="self-start !text-gray-700">
                    User List
                  </Text>
                </div>
                <div className="flex">
                  <div className="flex self-start items-center gap-[7px]">
                    <Img src="images/img_lock.svg" alt="lock_one" className="h-[20px] w-[20px]" />
                    <Text as="p" className="!text-gray-700">
                      Add New User
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:self-stretch pl-6 gap-[51px] py-6 md:p-5 sm:gap-[25px] sm:pl-5 sm:py-5 flex-1">
            <div className="flex sm:flex-col justify-between items-start w-[94%] md:w-full gap-5">
              <Heading size="lg" as="h2">
                Dashboard
              </Heading>
              <div className="flex justify-between items-center w-[32%] sm:w-full mt-[3px] gap-5">
                <Button size="sm" shape="square" className="sm:px-5 min-w-[190px]">
                  Welcome, Moudud
                </Button>
                <Button color="deep_orange_200_01" size="xs" variant="fill" shape="round" className="min-w-[77px]">
                  Logout
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col self-stretch justify-between gap-5 px-[17px]">
              <div className="flex justify-center w-[32%] md:w-full p-6 sm:p-5 bg-white-A700 shadow-xs rounded-[16px]">
                <div className="flex justify-between items-center w-full gap-5">
                  <div className="flex justify-center items-center w-[68%]">
                    <div className="flex flex-col items-start">
                      <div className="flex">
                        <Text size="xs" as="p">
                          Total Trash Collected
                        </Text>
                      </div>
                      <Heading as="h3">80.280</Heading>
                    </div>
                    <div className="flex self-end mb-[7px] ml-[-50px] relative">
                      <Heading size="xs" as="h4" className="mt-2.5 !text-red-A200">
                        Tons
                      </Heading>
                    </div>
                  </div>
                  <Img src="images/img_frame_red_a200_30x30.svg" alt="image_four" className="h-[30px] w-[30px]" />
                </div>
              </div>
              <div className="flex justify-center w-[32%] md:w-full mr-[39px] p-6 md:mr-0 sm:p-5 bg-white-A700 shadow-xs rounded-[16px]">
                <div className="flex justify-between items-center w-full gap-5">
                  <div className="flex flex-col items-start w-[53%]">
                    <div className="flex">
                      <Text size="xs" as="p" className="self-end">
                        Trash Collected / Day
                      </Text>
                    </div>
                    <div className="flex items-start gap-[11px] flex-wrap">
                      <Heading as="h5" className="h-[29px]">
                        50
                      </Heading>
                      <Heading size="xs" as="h6" className="!text-red-A200">
                        Tons
                      </Heading>
                    </div>
                  </div>
                  <Img src="images/img_frame_red_a200_30x30.svg" alt="image_five" className="h-[30px] w-[30px]" />
                </div>
              </div>
            </div>
            <div className="flex w-[94%] md:w-full mb-[65px] pt-[51px] md:pt-5">
              <div className="flex md:flex-col items-start w-full gap-[26px]">
                <div className="flex flex-col w-[32%] md:w-full gap-[34px]">
                  <div className="flex items-start p-3.5 bg-white-A700 shadow-xs flex-wrap rounded-[16px]">
                    <Text size="xs" as="p" className="mt-[11px]">
                      Total Trucks
                    </Text>
                    <Heading size="md" as="h3" className="mb-12 ml-[18px]">
                      200
                    </Heading>
                    <Img src="images/img_user.svg" alt="user_one" className="h-[30px] mb-[102px] ml-[55px]" />
                  </div>
                  <div className="flex flex-col items-start gap-[22px] bg-white-A700 shadow-xs rounded-[16px]">
                    <Text size="xs" as="p" className="mt-[23px] ml-[19px] md:ml-0">
                      Waste Capacity
                    </Text>
                    <div className="flex self-end items-start w-[74%] md:w-full mr-[45px] gap-[3px] md:p-5 md:mr-0">
                      <Heading size="md" as="h3" className="mt-1.5">
                        15000
                      </Heading>
                      <div className="flex">
                        <Heading as="h4" className="mt-[5px] !text-red-A200">
                          Tons
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:self-stretch h-[354px] md:w-full pr-5 py-5 bg-white-A700 shadow-xs flex-1 relative rounded-[16px] md:flex-none">
                  <div className="flex flex-col w-[87%] top-[24.00px] right-0 left-0 m-auto absolute">
                    <div className="flex">
                      <div className="flex flex-col items-start w-[30%] md:w-full">
                        <div className="flex">
                          <Text size="xs" as="p">
                            All Users
                          </Text>
                        </div>
                        <Heading as="h4" className="h-[29px]">
                          30
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col w-[32%] md:w-full mt-[-8px] ml-[107px] gap-4 md:ml-0 relative">
                      <Button color="deep_orange_200" variant="fill" shape="square" className="w-full">
                        System Admin
                      </Button>
                      <Text
                        as="p"
                        className="flex justify-center items-center h-[47px] px-[3px] py-[13px] !text-black-900 !font-righteous bg-amber-300"
                      >
                        Landfill Manager
                      </Text>
                      <Button color="green_200" variant="fill" shape="square" className="w-full">
                        STS Manager
                      </Button>
                      <Button color="light_blue_200" variant="fill" shape="square" className="w-full sm:pr-5">
                        Unassigned
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_frame.svg"
                    alt="image_six"
                    className="h-[30px] left-[0.00px] top-[20.00px] m-auto absolute"
                  />
                  <Img
                    src="images/img_image_1.png"
                    alt="imageone_one"
                    className="h-[270px] w-[270px] right-[5%] bottom-0 top-0 my-auto object-cover absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
