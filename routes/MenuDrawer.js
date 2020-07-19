import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import DashBoardStack from './DashBoardStack';
import UpdateDetailsStack from './UpdateDetailsStack';
import PurchasePlans from '../screens/PurchasePlan';
import PurchasePlan from '../screens/PurchasePlan';
import AddEquipmentStack from './AddEquipmentStack';
import OwnerInventoryStack from './OwnerInventoryStack';
import HealthDashboardStack from './HealthDashbaordStack';
import UtilizationStack from './UtilizationStack'
import PurchasePlanStack from './PurchasePlanStack';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashBoardStack,
  },
  Equipment: {
    screen: AddEquipmentStack,
  },
  Inventory : {
    screen : OwnerInventoryStack,
  },
  Utilization : {
    screen : UtilizationStack,
  },
  Revenue : {
    screen : HealthDashboardStack,
  },
  Profile : {
    screen : UpdateDetailsStack,
  },
  Subscriptions : {
    screen : PurchasePlanStack,
  }
});

export default createAppContainer(RootDrawerNavigator);