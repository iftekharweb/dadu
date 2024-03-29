from rest_framework.serializers import ModelSerializer
from ecosync.models import CustomUser

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'role']
        read_only_fields = ['role']
        
    # def get_fields(self, *args, **kwargs):
    #     fields = super().get_fields(*args, **kwargs)
    #     request = self.context.get('request', None)
    #     user = request.user if request else None

    #     if user and user.role.Name != 'System Admin':  # Check if the user is not a System Admin
    #         fields['role'].read_only = True  # Set role field to read-only

    #     return fields

class UpdateProfileSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username','first_name', 'last_name', 'email', 'role']
