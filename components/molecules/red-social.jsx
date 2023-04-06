import Image from "next/image";
import { RED_SOCIAL_CONTACTO } from "@/utils/shared";
import { openInNewTab } from "@/utils/functions";

function RedSocial({
  redSocial,
  width = 100,
  height = 100,
  withBorder = false,
}) {
  return (
    <div
      className={
        "cursor-pointer   " +
        (withBorder ? "w-10 h-10 p-2 border rounded-full" : "")
      }
    >
      <div onClick={() => openInNewTab(RED_SOCIAL_CONTACTO[redSocial].url)}>
        <Image
          width={width}
          height={height}
          src={RED_SOCIAL_CONTACTO[redSocial].icon}
          alt="Logo de Facebook"
        />
      </div>
    </div>
  );
}

export default RedSocial;
