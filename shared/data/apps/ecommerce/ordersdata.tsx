interface dataType {
  id: number;
  orderid: string;
  src: string;
  src1: string;
  product: string;
  cusromer: string;
  mobile: string;
  date: string;
  status: string;
  payment: string;
  cost: string;
  color: string;
}

export const Ordertable: dataType[] = [
  { id: 1, orderid: "#1172553", src: "../../../assets/images/ecommerce/png/6.png", src1: "../../../assets/images/faces/4.jpg", product: "Men's Casual Shoes", cusromer: "Violeta Tilly", mobile: "(222) 111 - 57840", date: "11 Jan 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$149", color: "success" },
  { id: 2, orderid: "#1172555", src: "../../../assets/images/ecommerce/png/7.png", src1: "../../../assets/images/faces/15.jpg", product: "Wireless Headphones", cusromer: "Danny Raj", mobile: "(222) 687-9954", date: "23 Jan 2024", status: "Pending", payment: "Online Payment", cost: "$99", color: "warning" },
  { id: 3, orderid: "#1202513", src: "../../../assets/images/ecommerce/png/8.png", src1: "../../../assets/images/faces/8.jpg", product: "Ladies' Handbag", cusromer: "Sissera William", mobile: "(222) 987-1323", date: "19 Feb 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$79", color: "success" },
  { id: 4, orderid: "#1202510", src: "../../../assets/images/ecommerce/png/9.png", src1: "../../../assets/images/faces/11.jpg", product: "Smartphone", cusromer: "Red Stark", mobile: "(222) 447-4518", date: "06 Mar 2024", status: "Cancelled", payment: "Online Payment", cost: "$699", color: "danger" },
  { id: 5, orderid: "#1222516", src: "../../../assets/images/ecommerce/png/10.png", src1: "../../../assets/images/faces/1.jpg", product: "Smartwatch", cusromer: "Henry Milo", mobile: "(222) 666-8080", date: "18 Mar 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$199", color: "success" },
  { id: 6, orderid: "#1202513", src: "../../../assets/images/ecommerce/png/11.png", src1: "../../../assets/images/faces/8.jpg", product: "Gaming Mouse", cusromer: "Sissera William", mobile: "(222) 144-1423", date: "19 Feb 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$49", color: "success" },
  { id: 7, orderid: "#1202510", src: "../../../assets/images/ecommerce/png/12.png", src1: "../../../assets/images/faces/11.jpg", product: "DSLR Camera", cusromer: "Red Stark", mobile: "(222) 985-4715", date: "06 Mar 2024", status: "Cancelled", payment: "Online Payment", cost: "$999", color: "danger" },
  { id: 8, orderid: "#1222516", src: "../../../assets/images/ecommerce/png/13.png", src1: "../../../assets/images/faces/1.jpg", product: "Bluetooth Speaker", cusromer: "Henry Milo", mobile: "(222) 887-1323", date: "18 Mar 2024", status: "Shipped", payment: "Cash On Delivery", cost: "$149", color: "success" },

]
import { Fragment, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const LabeledTwoThumbs1 = ({ rtl }: { rtl: boolean }) => {
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;

  const [values, setValues] = useState([20, 40]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(newValues) => setValues(newValues)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              className="rangeslider-thumb"
              ref={props.ref}
              style={{
                backgroundColor: 'var(--primary-color)',
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['rgb(var(--light-rgb))', 'var(--primary-color)', 'rgb(var(--light-rgb))'],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          // <Fragment>
          <div
            {...props}

            key={index}

            style={{
              ...props.style,
              top: "14px",
              height: '20px',
              width: '24px',
              borderRadius: '4px',
              backgroundColor: 'var(--custom-white)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'rgba(170, 170, 170, 0.3) 0px 2px 6px'
            }}

          >
            <Fragment>
              <div
                style={{
                  position: 'absolute',
                  top: '-28px',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  fontFamily: 'Arial, Helvetica Neue, Helvetica, sans-serif',
                  padding: '4px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--primary-color)',
                }}
              >
                {values[index].toFixed(1)}
              </div>
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? '#548BF4' : 'rgb(var(--light-rgb))',
                }}
              />
            </Fragment>
          </div>
          // </Fragment>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs1;