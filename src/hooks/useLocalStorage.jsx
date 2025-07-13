// key ve baslangıç değerini -> useState kullarak update edeceğiz.
// setItem(key, string hale çevrilmiş değer kullanacağız)

import { useState } from "react";



// useLocakStorage("darkMode", true);
// useState gibi çalışacak ancak verisini localStorage üzerinde tutan bir hook!!

export const useLocalStorage = (key, initialValue) => {

    const [data, setData] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem(key)); // -> string

        // return storedData ? storedData : initialValue; --> bu yetersiz kalıyor. O nedenle;
        if (storedData) {
            return storedData;
        } else {
            localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }


    });

    // Javascript object notation -> {"key": value}
    // Daha önce local storage'a alınan ve string olmayan bir değeri -> orj. haline çeviriyorum.
    // const storeData = JSON.parse(localStorage.getItem(key));  // -> string!


    // sanırım bu; bu gibi durumlarda sıkça kulanılan bir callback fonksiyonudur.
    const updateStorgeData = (value) => {
        setData(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [data, updateStorgeData];
};