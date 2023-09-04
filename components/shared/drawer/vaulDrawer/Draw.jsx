"use client";
import React from "react";
import { Drawer } from "vaul";
import colors from "../../../utl/colors.json"

export default function MyDrawer({
  headTitle = "sample",
  subTitle = "SubTitle",
  btnTXT = "test",
  btnIcon,
  children,
  chip,
}) {
  return (
    <Drawer.Root shouldScaleBackground>
      <div className="relative">
        <ChipData chip={chip} />
        <Triger btnIcon={btnIcon} btnTXT={btnTXT} />
      </div>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[70%] mt-24 fixed bottom-0 left-0 right-0 ">
          <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-auto ">
            <div className="flex-shrink-0 w-12 mx-auto mb-8 rounded-full h-15 bg-zinc-900 " />
            <div className="mx-auto max-w-fit ">
              <DrawTItle headTitle={headTitle} />
              {children}
            </div>
          </div>
          <DrawFooter></DrawFooter>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function DrawFooter() {
  return (
    <div className="p-4 mt-auto border-t bg-zinc-100 border-zinc-200">
      <div className="flex justify-end max-w-md gap-6 mx-auto"></div>
    </div>
  );
}

function DrawTItle({ headTitle }) {
  return (
    <Drawer.Title className="mb-4 font-medium">
      <div className="flex items-center h-8 px-8 mb-4 border-b-4 border-black w-fit bg-amber-400">
        <h1>{headTitle}</h1>
      </div>
    </Drawer.Title>
  );
}

function ChipData(props) {
  return (
    <span className="absolute p-1 px-3 text-black shadow-sm border-1 bg-green-400/50 top-1 right-2 rounded-xl text-tiny">
      {props.chip}
    </span>
  );
}

function Triger({ btnIcon, btnTXT }) {
  let indexColor = Math.floor(Math.random() * 10) + 1;

  return (
    <Drawer.Trigger asChild>
      <button
        className="flex items-center justify-center flex-col
                           gap-4 p-4 min-w-[150px] min-h-[150px]
                           hover:ring-1 hover:ring-offset-4 hover:ring-yellow-400
                           rounded-sm hover:shadow-lg   bg-slate-300 dark:bg-zinc-800 capitalize"
                           style={{ backgroundColor:colors.items[indexColor]?.backgroundColor,color:colors.items[indexColor]?.textColor}}
      >
        {/* {btnIcon } */}
        {React.cloneElement(btnIcon, {
        style: {
          backgroundColor: colors.items[indexColor]?.backgroundColor,
          color: colors.items[indexColor]?.textColor,
          fontSize: '24px',
          padding: '8px',
          borderRadius: '50%'
        }
      })}
         {btnTXT}
      </button>
    </Drawer.Trigger>
  );
}
