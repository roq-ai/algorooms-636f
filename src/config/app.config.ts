interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Platform Owner'],
  customerRoles: [],
  tenantRoles: ['Platform Owner'],
  tenantName: 'Organization',
  applicationName: 'algorooms',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
