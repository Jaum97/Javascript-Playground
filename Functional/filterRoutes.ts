export const routesData = [
  {
    path: "LOGIN",
    key: "LOGIN",
    Screen: "Auth",
    exact: true,
  },
  {
    path: "RECOVER_PASSWORD",
    key: "RECOVER_PASSWORD",
    Screen: "RecoverPassword",
    exact: true,
  },
  {
    path: "CHANGE_PASSWORD",
    key: "CHANGE_PASSWORD",
    Screen: "ChangePassword",
    exact: true,
  },
  {
    path: "NEW_ACCOUNT",
    key: "NEW_ACCOUNT",
    Screen: "NewAccount",
    exact: true,
  },
  {
    path: "CONFIRMATION",
    key: "CONFIRMATION",
    Screen: "Confirmation",
    exact: true,
  },
  {
    path: "NEW_CLIENT",
    key: "NEW_CLIENT",
    Screen: "NewClient",
    exact: true,
  },
  {
    path: "CHANGE_PERSONAL_PASSWORD",
    key: "CHANGE_PERSONAL_PASSWORD",
    Screen: "ChangePersonalPassword",
    exact: true,
    isPrivate: true,
  },
  {
    name: "Produtos",
    displayOnNavBar: true,
    path: "PRODUCT_LIST",
    key: "PRODUCT_LIST",
    Screen: "ProductList",
    exact: true,
    accessTypes: ["CUSTOMER"],
    isPrivate: true,
  },
  {
    path: "CART",
    key: "CART",
    Screen: "Cart",
    exact: true,
    accessTypes: ["CUSTOMER"],
    isPrivate: true,
  },
  {
    path: "ORDER_SUMMARY",
    key: "ORDER_SUMMARY",
    Screen: "OrderSummary",
    exact: true,
    accessTypes: ["CUSTOMER"],
    isPrivate: true,
  },
  {
    name: "Minha Conta",
    displayOnNavBar: true,
    path: "MY_ACCOUNT",
    key: "MY_ACCOUNT",
    Screen: "MyAccount",
    exact: true,
    accessTypes: ["CUSTOMER", "ADMIN", "SAC"],
    isPrivate: true,
  },
  {
    name: "Historico de Pedidos",
    displayOnNavBar: true,
    path: "ORDER_HISTORY",
    key: "ORDER_HISTORY",
    Screen: "OrderHistory",
    exact: true,
    accessTypes: ["CUSTOMER"],
    isPrivate: true,
  },
  {
    path: "ORDER_DETAIL" + "/:orderID",
    key: "ORDER_DETAIL",
    Screen: "OrderDetail",
    exact: true,
    accessTypes: ["CUSTOMER"],
    isPrivate: true,
  },
  {
    path: "SUCCESS",
    key: "SUCCESS",
    Screen: "Success",
    exact: true,
    accessTypes: ["CUSTOMER"],
    isPrivate: true,
  },
  {
    path: "INTER_LOGIN",
    key: "INTER_LOGIN",
    Screen: "InternLogin",
    exact: true,
    isPrivate: false,
  },
];

export const pickProp = <K extends string>(prop: K) => <
  O extends { [key in K]?: any }
>(
  obj: O
): O[K] => {
  if (!obj) {
    throw TypeError(`Cannot convert ${obj} to object`);
  }

  return obj[prop];
};

export const isValidObj = (obj: any): boolean =>
  obj === Object(obj) && !Array.isArray(obj);

export const objHasProps = (obj: any): boolean =>
  Boolean(obj && Object.keys(obj).length);

export const satisfiesAny = <T extends (...args: any[]) => boolean>(
  ...fns: Array<T>
) => (arg: any): boolean => fns.some((f) => f(arg));

export const satisfiesAll = <T extends (...args: any[]) => boolean>(
  ...fns: Array<T>
) => (arg: any): boolean => fns.every((f) => f(arg));

/**
 * - isObjValidAndNotEmpty checks if object is valid and not empty
 * @param x object to verify
 * @returns boolean
 */
export const isObjValidAndNotEmpty = satisfiesAll(isValidObj, objHasProps);

type Maybe<T> = T | undefined;

/**
 * -compareProp
 * @param checkEqual whether to check if prop is equal or different
 * @param prop property to compare
 * @param item1 item to pick prop from and compare
 * @param item2 item to pick prop and compare with item1
 */
const compareProp = function (
  checkEqual: boolean
): <K extends string, T extends { [key in K]: any }>(
  prop: K
) => (item1: Maybe<T | T[K]>) => (item2: Maybe<T | T[K]>) => boolean {
  return (prop) => (item1) => (item2) => {
    if (!item1 || !item2) return false;

    const toCompare1 = isObjValidAndNotEmpty(item1) ? item1[prop] : item1;
    const toCompare2 = isObjValidAndNotEmpty(item2) ? item2[prop] : item2;

    const matches = checkEqual
      ? toCompare1 === toCompare2
      : toCompare1 !== toCompare2;

    return Boolean(item1 && item2 && matches);
  };
};

export const isPropEqual = compareProp(true);

export const isPropDifferent = compareProp(false);

export const pipeableArrayMethod = <R = undefined>(method: any) => <C extends any>(
	callback: C
) => <T>(arr: Array<T>): R extends undefined ? Array<T> : R => method.call(arr, callback)

export const pipeableMap = pipeableArrayMethod(Array.prototype.map)

export const pipeableFilter = pipeableArrayMethod(Array.prototype.filter)

export const pipeableSome = pipeableArrayMethod<boolean>(Array.prototype.some)


export const pipe = function <Fns extends Array<any>>(
	...fns: Fns
): any {
	return function (value) {
		return fns.reduce(
			(currentVal, currentFn) => currentFn(currentVal),
			value
		)
	}
}

const customer = {
  type: "CUSTOMER"
};

const falsyAccessTypes = isPropEqual("accessTypes")(undefined);

const isSameType = isPropEqual("type")(customer.type);

const someIsSameType = pipe(pickProp('accessTypes'), pipeableSome(isSameType))


const routes = routesData
  .filter(pickProp("displayOnNavBar"))
  .filter((route) => !route.accessTypes || route.accessTypes.some(isSameType))
  .map(pickProp('name'))

const routes2 = routesData
  .filter(pickProp("displayOnNavBar"))
  .filter(satisfiesAny(falsyAccessTypes, someIsSameType)).map(pickProp('name'));

routes

routes2
