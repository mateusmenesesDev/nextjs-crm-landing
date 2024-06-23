import Image, { type StaticImageData } from "next/image";

import CompanyBox from "./CompanyBox";
import FeatureContainer from "../FeatureContainer";
import FeatureTestimonial from "../FeatureTestimonial";
import FeatureItem from "../FeatureItem";

import Container from "~/components/ui/Container";
import Fivetran from "~/components/icons/companies/Fivetran";
import Hightouch from "~/components/icons/companies/Hightouch";
import Census from "~/components/icons/companies/Census";
import Segment from "~/components/icons/companies/Segment";
import Outlook from "~/components/icons/companies/Outlook";
import Gmail from "~/components/icons/companies/Gmail";

import { modeledData } from "~/constant/modeledData";

import workspaceImage from "/public/images/workspace.png";
import avatarImage from "/public/svg/avatar-2.svg";
import { cn } from "~/lib/utils";

export default function ModeledYourData() {
  return (
    <Container>
      <FeatureItem
        title="Modeled around your data and workflows."
        description="A CRM should go beyond deals. Attio is built for any business process."
      >
        <div className="flex flex-col gap-8 text-md">
          {modeledData.map((data, i) => (
            <div
              key={data.title}
              className={
                i === 1
                  ? "lg:grid lg:h-[38rem] lg:grid-cols-2 lg:grid-rows-6 lg:gap-x-6"
                  : ""
              }
            >
              <div
                className={cn({
                  "lg:row-span-full lg:block": i === 1,
                })}
              >
                <FeatureContainer
                  rootClassName="h-full"
                  className={cn("lg:flex lg:gap-16", { "lg:block": i === 1 })}
                >
                  <div className="lg:max-w-96">
                    <h3 className="font-bold lg:inline">{data.title} </h3>
                    <p className="lg:inline">{data.description}</p>
                  </div>
                  <div className="mt-12 lg:hidden">
                    {data.image && (
                      <Image
                        src={data.image}
                        alt="image"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="hidden w-full lg:block">
                    {data.imageDesktop && (
                      <Image
                        src={data.imageDesktop}
                        alt="image"
                        className="max-h-[29rem] w-full object-contain"
                      />
                    )}
                  </div>
                </FeatureContainer>
              </div>
              {i === 1 && (
                <>
                  <div className="row-span-5">
                    <FeatureContainer rootClassName="h-full">
                      <Image src={workspaceImage} alt="workspace" />
                    </FeatureContainer>
                  </div>
                  <div className="h-full">
                    <FeatureContainer
                      rootClassName="h-full"
                      className="flex items-center justify-between"
                    >
                      <CompanyBox>
                        <Fivetran />
                      </CompanyBox>
                      <CompanyBox>
                        <Hightouch />
                      </CompanyBox>
                      <CompanyBox>
                        <Census />
                      </CompanyBox>
                      <CompanyBox>
                        <Segment />
                      </CompanyBox>
                      <CompanyBox>
                        <Outlook />
                      </CompanyBox>
                      <CompanyBox>
                        <Gmail />
                      </CompanyBox>
                    </FeatureContainer>
                  </div>
                </>
              )}
            </div>
          ))}
          <FeatureContainer rootClassName="lg:hidden">
            <Image src={workspaceImage} alt="workspace" />
          </FeatureContainer>
          <FeatureContainer
            className="flex justify-between "
            rootClassName="lg:hidden"
          >
            <CompanyBox>
              <Fivetran />
            </CompanyBox>
            <CompanyBox>
              <Hightouch />
            </CompanyBox>
            <CompanyBox>
              <Census />
            </CompanyBox>
            <CompanyBox>
              <Segment />
            </CompanyBox>
            <CompanyBox>
              <Outlook />
            </CompanyBox>
            <CompanyBox>
              <Gmail />
            </CompanyBox>
          </FeatureContainer>
          <FeatureTestimonial
            avatarImage={avatarImage as StaticImageData}
            text="“Attio is an incredibly flexible product, you can build anything on it. It gives you the tools you need to build a CRM that’s exactly right to your business, your data, and your processes.”"
            name="Filip Mark"
            position="Chief of Staff, Passionfroot"
          />
        </div>
      </FeatureItem>
    </Container>
  );
}
