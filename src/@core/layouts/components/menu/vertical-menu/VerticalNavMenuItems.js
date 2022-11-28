// ** Vertical Menu Components
import VerticalNavMenuLink from "./VerticalNavMenuLink"
import VerticalNavMenuGroup from "./VerticalNavMenuGroup"
import VerticalNavMenuSectionHeader from "./VerticalNavMenuSectionHeader"

import { PermissionAbility } from "@utils"

// ** Utils
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from "@layouts/utils"

const VerticalMenuNavItems = (props) => {
  // ** Components Object
  const Components = {
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
    VerticalNavMenuSectionHeader
  }

  // ** Render Nav Menu Items
  const RenderNavItems = props.items.map((item, index) => {
    const TagName = Components[resolveNavItemComponent(item)]

    if (item.children) {
      return (
        <PermissionAbility permission={item?.permission}>
          <TagName item={item} index={index} key={item.id} {...props} />
        </PermissionAbility>
      )
    }
    return (
      <PermissionAbility permission={item?.permission}>
        <TagName key={item.id || item.header} item={item} {...props} />
      </PermissionAbility>
    )
  })

  return RenderNavItems
}

export default VerticalMenuNavItems
