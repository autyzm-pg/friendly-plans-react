import React from 'react';
import Svg, { Defs, G, LinearGradient, Path, Stop, SvgProps } from 'react-native-svg';

export const LeafPink = (props: SvgProps) => (
  <Svg width={121.555} height={176.637} {...props}>
    <Defs>
      <LinearGradient id="prefix__a" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#f8b2d3" />
        <Stop offset={1} stopColor="#fe9dca" />
      </LinearGradient>
    </Defs>
    <G fillRule="evenodd">
      <Path
        d="M497.594 307.125c.511-18.648 14.687-36.814 31.362-43.8 10.639-4.458 26.91-6.271 32.48-17.529 7.885-15.933-1.143-34.11 14.971-47.28 8.145-6.657 37.552-20.495 40.507-.663 1.811 12.154-13.168 18.866-16.171 29.4-5.5 19.283 12.345 39.956-1.7 57.986-9.859 12.655-31.269 11.809-38.923 25.176-7.466 13.042-3.1 33.836-14.086 45.146a34.343 34.343 0 01-13.546 8.3c-3.181 1.106-36.2-.637-36.2-.637s-1.6-25.18-.21-44.157z"
        transform="translate(-495.511 -187.583)"
        fill="url(#prefix__a)"
      />
      <Path
        d="M100.468 16.095l-.014.466-.25.336-.243.344-.236.352-.229.363-.146.242-.1.1-.288.306-.285.31-.286.316-.283.317-.282.322-.279.324-.279.33-.278.331-.273.334-.273.338-.268.342-.267.343-.266.349-.262.348-.258.354-.255.355-.253.359-.123.178-.125.182-.123.181-.122.181-.121.183-.122.183-.12.183-.117.185-.119.185-.116.185-.114.186-.115.187-.114.186-.111.189-.111.186-.112.189-.109.19-.108.188-.1.19-.106.19-.1.192-.1.19-.1.192-.1.192-.1.192-.1.194-.1.194-.1.193-.093.194-.094.194-.09.2-.064.135-.027.059-.09.195-.089.194-.086.2-.087.2-.084.2-.083.2-.082.2-.079.2-.079.2-.076.2-.076.2-.073.2-.073.2-.07.2-.069.2-.068.2-.066.2-.063.2-.062.2-.061.2-.059.2-.057.2-.058.2-.053.2-.053.2-.05.2-.049.2-.047.2-.045.2-.041.2-.042.2-.04.2-.038.2-.035.2-.035.2-.033.2-.029.2-.028.2-.026.2-.025.2-.022.2-.021.2-.019.2-.016.2-.015.2-.013.2-.008.16v.04l-.01.2-.009.2-.007.2v.933l.008.266.01.264.015.264.017.265.022.264.023.262.028.263.03.264.033.263.036.262.039.263.041.262.045.263.046.261.05.263.051.262.054.263.055.263.058.263.06.262.062.263.064.265.017.062.045.2.064.266.063.265.066.266.067.264.067.267.141.534.145.536.148.537.15.539.153.542.307 1.09.153.548.153.552.15.554.146.557.072.28.072.281.069.282.069.283.069.284.065.284.065.285.062.287.06.287.06.287.056.291.055.29.07.392.066.395.062.4.057.4.054.4.051.4.046.4.042.407.036.409.035.408.029.41.026.414.021.412.017.415.014.415.008.417.005.417v.837l-.007.42-.012.421-.016.42-.021.422-.025.42-.028.421-.033.422-.038.422-.042.42-.047.422-.051.419-.054.419-.03.211-.029.21-.032.21-.033.21-.033.21-.035.208-.036.21-.037.208-.038.208-.04.208-.04.208-.042.208-.042.206-.043.208-.045.207-.042.183-.005.023-.047.206-.049.206-.051.207-.052.2-.052.205-.052.2-.056.2-.055.2-.058.2-.057.2-.061.2-.059.2-.062.2-.063.2-.064.2-.066.2-.066.2-.068.2-.07.2-.069.2-.071.2-.073.2-.073.2-.075.2-.076.194-.078.194-.078.194-.08.192-.082.192-.081.192-.084.191-.085.19-.087.188-.086.189-.089.188-.09.187-.09.185-.092.187-.094.183-.1.185-.1.184-.1.181-.1.182-.1.179-.1.18-.1.178-.1.178-.106.178-.106.175-.107.174-.116.187-.117.183-.118.183-.118.181-.118.178-.118.18-.119.176-.12.176-.119.174-.122.173-.121.171-.122.169-.123.169-.121.167-.125.168-.123.164-.124.164-.125.162-.127.16-.124.161-.129.158-.126.157-.128.155-.127.156-.129.153-.129.152-.129.151-.13.149-.132.15-.13.146-.131.147-.132.144-.133.143-.133.143-.134.142-.133.141-.133.138-.137.139-.27.272-.271.267-.275.263-.275.26-.277.255-.28.249-.28.248-.282.241-.283.238-.285.234-.287.23-.289.225-.288.224-.291.218-.291.214-.294.211-.294.208-.295.2-.3.2-.3.2-.3.194-.3.19-.3.189-.3.184-.3.182-.3.178-.306.176-.3.173-.307.169-.307.169-.309.164-.309.163-.311.16-.31.157-.312.156-.313.153-.312.152-.314.148-.314.147-.314.145-.315.143-.316.141-.317.14-.316.14-.317.136-.319.134-.317.135-.319.131-.319.13-.32.131-.32.13-.579.229-.061.024-.641.248-.643.246-.645.244-.645.241-.645.24-.644.239-1.293.476-.647.241-.644.24-.647.242-.645.247-.645.247-.644.252-.321.126-.321.129-.321.129-.32.129-.321.133-.321.132-.321.135-.319.136-.319.136-.319.14-.319.139-.319.143-.317.144-.318.144-.317.149-.317.15-.316.152-.316.153-.316.155-.314.157-.314.161-.314.164-.314.164-.312.167-.313.171-.312.173-.311.174-.312.18-.644.375-.643.376-.635.377-.631.376-.625.379-.62.378-.616.378-.61.379-.6.38-.6.382-.594.381-.59.382-.584.382-.578.384-.575.382-.568.386-.564.384-.558.386-.554.386-.547.388-.543.387-.539.39-.533.388-.528.391-.522.39-.52.391-.512.394-.509.391-.5.4-.5.393-.494.4-.488.4-.484.4-.478.4-.474.4-.469.4-.464.4-.459.4-.455.4-.448.4-.445.4-.439.406-.436.4-.429.406-.426.408-.42.408-.417.408-.41.41-.407.411-.4.412-.4.413-.393.414-.387.415-.383.415-.378.417-.374.417-.37.419-.365.422-.179.209-.181.21-.177.211-.177.212-.176.21-.176.212-.173.212-.172.212-.172.212-.171.213-.168.213-.169.214-.144.185-.023.028-.17.21-.169.212-.167.212-.167.211-.165.212-.163.214-.163.212-.162.214-.16.212-.16.214-.158.214-.158.216-.157.214-.155.216-.154.215-.153.216-.152.216-.151.216-.149.217-.15.218-.148.217-.146.218-.146.219-.144.218-.143.219-.143.219-.14.22-.141.221-.139.219-.138.221-.137.221-.136.221-.134.223-.134.221-.132.223-.132.223-.131.223-.13.225-.127.223-.129.224-.125.225-.126.227-.125.224-.122.227-.123.226-.12.227-.121.228-.12.226-.116.229-.119.228-.115.228-.035.069-.081.161-.115.228-.113.23-.115.229-.112.23-.111.231-.11.23-.11.232-.108.232-.106.232-.106.233-.1.234-.1.232-.1.235-.1.234-.1.235-.1.235-.1.236-.1.235-.1.237-.1.237-.1.237-.092.239-.094.237-.091.239-.091.241-.09.239-.089.24-.087.241-.088.241-.085.24-.086.243-.083.242-.082.243-.082.244-.083.244-.078.244-.079.244-.078.246-.077.246-.077.246-.073.246-.075.248-.074.248-.071.247-.07.248-.07.25-.049.169-.025.08-.082.246-.08.248-.08.247-.079.248-.077.249-.077.25-.075.251-.073.249-.145.506-.14.506-.137.51-.131.511-.128.513-.123.516-.119.52-.114.521-.11.523-.106.529-.794.625-.588-.82.044-.543.05-.545.054-.541.055-.543.06-.54.062-.54.067-.537.069-.538.075-.536.077-.535.039-.269.042-.265.041-.267.042-.267.044-.265.044-.266.046-.267.048-.265.014-.083.042-.179.061-.262.063-.26.065-.261.065-.26.065-.26.068-.258.068-.26.068-.259.07-.258.072-.258.072-.258.073-.257.076-.256.075-.256.077-.257.077-.256.078-.255.081-.254.08-.255.081-.255.083-.254.084-.253.086-.253.085-.253.088-.252.087-.253.089-.251.091-.251.091-.251.092-.251.077-.326.1-.25.1-.251.1-.249.1-.247.1-.25.1-.247.1-.249.1-.248.1-.247.105-.246.1-.248.106-.245.108-.246.108-.246.11-.245.078-.172.034-.072.113-.244.115-.244.115-.244.117-.242.117-.244.12-.242.118-.24.122-.242.122-.243.124-.24.124-.24.125-.241.127-.238.127-.24.129-.239.131-.239.13-.238.133-.239.134-.238.134-.237.136-.237.136-.236.137-.237.139-.237.14-.235.142-.236.142-.235.144-.235.145-.235.144-.234.148-.233.148-.235.148-.233.151-.233.152-.231.151-.234.155-.231.153-.231.157-.232.156-.231.159-.231.16-.23.16-.231.162-.23.163-.23.164-.229.165-.228.165-.229.167-.228.169-.228.17-.228.023-.029.151-.2.176-.224.177-.225.178-.224.179-.222.181-.223.181-.222.182-.223.185-.222.184-.221.186-.22.188-.223.189-.22.379-.44.385-.438.389-.438.4-.436.4-.435.4-.435.408-.432.412-.431.418-.43.422-.429.427-.429.431-.425.437-.427.441-.423.445-.423.452-.422.453-.422.461-.419.466-.418.469-.418.474-.416.48-.416.483-.415.488-.412.493-.413.5-.412.5-.409.507-.411.512-.407.518-.407.523-.407.528-.4.532-.406.538-.4.542-.4.547-.4.553-.4.556-.4.562-.4.567-.4.573-.4.576-.4.582-.394.587-.4.593-.394.595-.393.6-.392.606-.393.613-.39.617-.391.621-.389.629-.388.632-.389.638-.387.642-.387.648-.385.653-.387.658-.385.334-.191.331-.189.335-.186.334-.183.333-.179.335-.178.333-.174.335-.171.334-.169.334-.167.335-.164.335-.16.333-.159.335-.157.335-.155.333-.152.335-.149.333-.149.335-.146.333-.145.333-.143.333-.139.333-.14.333-.138.331-.136.331-.134.333-.132.331-.133.661-.26.658-.255.657-.251.654-.248.653-.246.65-.243 1.292-.481.641-.24.64-.239.634-.239.631-.241.629-.242.624-.244.059-.024.563-.223.307-.122.308-.124.307-.126.3-.126.3-.127.3-.13.3-.129.3-.131.3-.131.3-.133.3-.135.3-.136.295-.138.3-.14.293-.14.291-.143.29-.143.289-.147.288-.149.286-.148.286-.152.283-.154.283-.157.281-.158.279-.161.28-.162.277-.166.274-.168.276-.17.273-.173.271-.176.27-.178.268-.18.267-.186.266-.185.265-.19.263-.193.26-.2.261-.2.258-.2.258-.206.255-.21.254-.211.252-.217.252-.22.248-.222.249-.227.247-.232.245-.234.244-.24.243-.244.119-.121.12-.124.121-.125.119-.126.12-.122.12-.129.117-.129.119-.129.116-.133.118-.133.117-.132.116-.137.116-.136.116-.136.114-.14.114-.139.114-.14.114-.143.114-.143.113-.144.112-.146.113-.147.112-.148.111-.149.111-.152.11-.151.111-.154.109-.154.111-.157.107-.157.109-.157.109-.16.108-.161.107-.164.106-.164.107-.164.106-.168.106-.167.093-.152.092-.152.091-.152.09-.154.09-.156.088-.155.089-.158.086-.159.085-.159.085-.159.083-.161.081-.162.081-.163.082-.162.077-.164.08-.167.076-.166.076-.166.077-.167.072-.168.075-.17.071-.169.071-.172.071-.171.069-.173.067-.173.068-.173.066-.175.064-.175.064-.177.064-.176.061-.177.06-.178.061-.179.059-.178.057-.18.057-.18.055-.182.056-.18.054-.182.053-.184.051-.182.051-.183.049-.184.048-.186.049-.185.047-.185.045-.186.045-.185.043-.187.006-.021.038-.167.041-.187.042-.187.04-.189.039-.189.039-.189.036-.189.036-.189.037-.189.033-.191.033-.191.033-.19.031-.191.029-.191.03-.191.028-.189.053-.387.051-.383.045-.385.041-.385.037-.386.034-.387.03-.385.026-.385.02-.387.018-.386.014-.385.01-.384.007-.386v-.766l-.005-.382-.011-.38-.012-.381-.016-.378-.021-.379-.024-.376-.028-.375-.032-.372-.035-.372-.04-.369-.042-.368-.047-.365-.049-.362-.054-.362-.058-.358-.059-.357-.048-.264-.05-.265-.051-.264-.055-.265-.055-.264-.059-.266-.058-.265-.062-.266-.062-.266-.065-.267-.066-.268-.065-.264-.138-.538-.141-.538-.145-.538-.146-.542-.3-1.088-.15-.548-.149-.55-.148-.552-.145-.555-.143-.558-.068-.281-.069-.281-.067-.282-.067-.282-.065-.283-.047-.218-.015-.068-.057-.287-.054-.287-.052-.287-.051-.289-.05-.29-.046-.291-.044-.292-.043-.292-.039-.294-.035-.294-.034-.295-.032-.3-.027-.3-.025-.3-.022-.3-.018-.3-.015-.3-.011-.3-.008-.3v-.911l.01-.307.011-.308.013-.23.015-.23.018-.227.019-.229.022-.227v-.045l.023-.183.028-.227.031-.227.032-.226.037-.225.036-.226.041-.225.04-.224.043-.223.048-.224.047-.224.05-.222.053-.221.052-.222.057-.22.058-.222.059-.22.061-.219.065-.22.064-.218.068-.218.07-.217.069-.216.073-.217.075-.216.075-.215.078-.214.08-.215.08-.213.084-.213.083-.213.087-.213.087-.211.091-.209.09-.211.092-.21.094-.209.1-.208.1-.207.1-.208.1-.207.1-.206.1-.2.1-.206.105-.2.107-.2.108-.2.034-.062.075-.139.112-.2.113-.2.114-.2.115-.2.116-.2.118-.2.12-.2.12-.2.12-.2.123-.2.123-.193.124-.194.126-.193.125-.192.129-.191.128-.19.129-.19.132-.189.13-.189.132-.187.134-.188.133-.185.136-.186.135-.185.137-.183.137-.184.139-.181.139-.182.14-.181.141-.181.142-.179.283-.356.288-.353.289-.348.294-.347.294-.343.3-.339.3-.337.3-.332.3-.329.305-.326.3-.322.307-.317.309-.315.31-.31.31-.308.31-.3.312-.3.107-.1.248-.149.373-.229.367-.23.36-.229.353-.23z"
        fill="#fe9dca"
      />
    </G>
  </Svg>
);
