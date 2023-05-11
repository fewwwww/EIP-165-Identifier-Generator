export const placeholderString = `Paste Your Interface Here...

Example Input:
'''
// Note: the ERC-165 identifier for this interface is 0xba541a2e.
interface IERC6150Enumerable is IERC6150 /* IERC721Enumerable */ {
  function childrenCountOf(uint256 parentId) external view returns (uint256);
  function childOfParentByIndex(
    uint256 parentId,
    uint256 index
  ) external view returns (uint256);
  function indexInChildrenEnumeration(
    uint256 parentId,
    uint256 tokenId
  ) external view returns (uint256);
}
'''`;
