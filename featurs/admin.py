from django.contrib import admin
from .models import *

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ['VehicleID', 'RegistrationNumber', 'Type', 'Capacity', 'FuelCostLoaded', 'FuelCostUnloaded', 'CreatedAt', 'UpdatedAt']

@admin.register(SecondaryTransferStation)
class SecondaryTransferStationAdmin(admin.ModelAdmin):
    list_display = ['STSID', 'WardNumber', 'Capacity', 'GPSLatitude', 'GPSLongitude', 'Manager', 'CreatedAt', 'UpdatedAt']

@admin.register(Landfill)
class LandfillAdmin(admin.ModelAdmin):
    list_display = ['LandfillID', 'Name', 'Location', 'Manager', 'CreatedAt', 'UpdatedAt']

@admin.register(WasteTransfer)
class WasteTransferAdmin(admin.ModelAdmin):
    list_display = ['TransferID', 'Vehicle', 'Source', 'Destination', 'VolumeOfWaste', 'TimeOfArrival', 'TimeOfDeparture', 'CreatedAt', 'UpdatedAt']

@admin.register(OilAllocation)
class OilAllocationAdmin(admin.ModelAdmin):
    list_display = ['AllocationID', 'Vehicle', 'WeekNumber', 'VolumeOfWaste', 'OilAllocated', 'CreatedAt', 'UpdatedAt']

@admin.register(Billing)
class BillingAdmin(admin.ModelAdmin):
    list_display = ['BillID', 'Vehicle', 'WeekNumber', 'VolumeOfWaste', 'OilConsumed', 'TotalCost', 'CreatedAt', 'UpdatedAt']

@admin.register(DumpingEntryRecord)
class DumpingEntryRecordAdmin(admin.ModelAdmin):
    list_display = ['EntryID', 'Vehicle', 'Landfill', 'VolumeOfWaste', 'TimeOfArrival', 'TimeOfDeparture', 'CreatedAt', 'UpdatedAt']

@admin.register(Permission)
class PermissionsAdmin(admin.ModelAdmin):
    list_display = ['PermissionID', 'Name', 'Description', 'CreatedAt', 'UpdatedAt']

@admin.register(RolePermission)
class RolePermissionAdmin(admin.ModelAdmin):
    list_display = ['RolePermissionID', 'Role', 'Permission', 'CreatedAt', 'UpdatedAt']

@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    list_display = ['RoleID', 'Name', 'Description', 'CreatedAt', 'UpdatedAt']

@admin.register(Route)
class RouteAdmin(admin.ModelAdmin):
    list_display = ['RouteID', 'Source', 'Destination', 'Distance', 'EstimatedTime', 'CreatedAt', 'UpdatedAt']
