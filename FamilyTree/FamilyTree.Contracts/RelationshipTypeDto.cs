namespace FamilyTree.Contracts;

public enum RelationshipTypeDto
{
    Child = 1,
    Parent = 2,
    Partner = 4,
    Spouse = Partner | 8,
    Wife = Spouse | 16,
    Husband = Spouse | 32,
    Girlfriend = Partner | 64,
    Boyfriend = Partner | 128,
    Daughter = Child | 256,
    Son = Child | 512,
    Mother = Parent | 1024,
    Father = Parent | 2048
}
