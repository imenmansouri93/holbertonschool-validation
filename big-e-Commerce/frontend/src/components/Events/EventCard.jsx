import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown"

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2`}>
      <div className="w-full lg-w[50%]  m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14Pro max 8/256gb</h2>
        <p>
          Ecran 6.7" HDR OLED Super Retina XDR (1284 x 2778 px) - Processeur
          Apple A14 Bionic Hexa Core - Etanche IP68 - RAM 6 Go - Mémoire 512 Go
          - Système Apple iOS 14 - Appareil Photo: Triple Caméra Arrière 3x 12
          MP, 12 MP (Frontale) - 5G - Wi-Fi 6 AX - Bluetooth 5.0 - Batterie
          Li-Ion 3687 mAh - Couleur Graphite - Garantie 1 an (Fourni Sans
          Adaptateur Secteur et Sans Ecouteurs)cran 6.7" HDR OLED Super Retina
          XDR (1284 x 2778 px) - Processeur Apple A14 Bionic Hexa Core - Etanche
          IP68 - RAM 6 Go - Mémoire 512 Go - Système Apple iOS 14 - Appareil
          Photo: Triple Caméra Arrière 3x 12 MP, 12 MP (Frontale) - 5G - Wi-Fi 6
          AX - Bluetooth 5.0 - Batterie Li-Ion 3687 mAh - Couleur Graphite -
          Garantie 1 an (Fourni Sans Adaptateur Secteur et Sans Ecouteurs)
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">120 sold</span>
        </div>
        <CountDown/>
      </div>
    </div>
  );
};

export default EventCard;
