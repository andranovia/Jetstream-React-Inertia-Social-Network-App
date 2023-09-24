import React, { PropsWithChildren } from 'react';
import image from '../../../public/img/one.webp';

interface WelcomeComponentsProps {
  children: React.ReactNode;
}

export default function WelcomeComponents({
  children,
}: WelcomeComponentsProps) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-auto ">
        <div className="bg-gray-100 h-full p-4 items-center justify-center">
          <div className="container mx-auto mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-center flex-col items-center space-x-4">
                <div>
                  <div>
                   
                    <img
                      src={image}
                      alt="User Profile"
                      className="w-[15rem] l rounded-full"
                    />
                  </div>
                  <div className="flex justify-center">{children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
